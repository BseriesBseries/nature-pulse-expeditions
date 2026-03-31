# contact/views.py
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactFormSerializer
from .models import ContactSubmission, NewsletterSubscriber
import logging

logger = logging.getLogger(__name__)

class ContactFormView(APIView):
    """
    API endpoint to handle contact form submissions
    """
    
    def post(self, request):
        serializer = ContactFormSerializer(data=request.data)
        
        if serializer.is_valid():
            data = serializer.validated_data
            
            try:
                # Get client IP and user agent
                x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
                if x_forwarded_for:
                    ip_address = x_forwarded_for.split(',')[0]
                else:
                    ip_address = request.META.get('REMOTE_ADDR')
                
                user_agent = request.META.get('HTTP_USER_AGENT', '')
                
                # Save to database
                submission = ContactSubmission.objects.create(
                    first_name=data['firstName'],
                    last_name=data['lastName'],
                    email=data['email'],
                    phone=data['phone'],
                    message=data['message'],
                    ip_address=ip_address,
                    user_agent=user_agent[:500]
                )
                
                # Handle newsletter subscription if requested
                if data.get('subscribeNewsletter', False):
                    try:
                        NewsletterSubscriber.objects.get_or_create(
                            email=data['email'],
                            defaults={'first_name': data['firstName']}
                        )
                    except Exception as e:
                        logger.error(f"Error subscribing to newsletter: {str(e)}")
                
                # Prepare email content
                name = f"{data['firstName']} {data['lastName']}"
                email = data['email']
                phone = data['phone']
                message = data['message']
                
                # Email to company
                company_subject = f"New Inquiry from {name}"
                company_message = f"""
New Contact Form Submission

Name: {name}
Email: {email}
Phone: {phone}
Submission ID: {submission.id}

Message:
{message}

---
Please respond to: {email}
"""
                
                # Email to customer (auto-reply)
                customer_subject = "Thank you for contacting Nature Pulse Expeditions"
                customer_message = f"""
Dear {name},

Thank you for reaching out to Nature Pulse Expeditions!

We have received your inquiry (Reference #{submission.id}) and our team will get back to you within 24 hours.

Here's a summary of your message:

{message}

For immediate assistance, please call us at +255 713 414 727

Visit our website: https://naturepulseexpeditions.com

Best regards,
Nature Pulse Expeditions Team
"""
                
                # Track email sending results
                company_email_sent = False
                customer_email_sent = False
                error_messages = []
                
                # Send email to company
                try:
                    send_mail(
                        subject=company_subject,
                        message=company_message,
                        from_email=settings.DEFAULT_FROM_EMAIL,
                        recipient_list=['info@naturepulseexpeditions.com'],
                        fail_silently=False,
                    )
                    company_email_sent = True
                except Exception as e:
                    error_messages.append(f"Company email error: {str(e)}")
                    logger.error(f"Error sending company email: {str(e)}")
                
                # Send auto-reply to customer
                try:
                    send_mail(
                        subject=customer_subject,
                        message=customer_message,
                        from_email=settings.DEFAULT_FROM_EMAIL,
                        recipient_list=[email],
                        fail_silently=False,
                    )
                    customer_email_sent = True
                except Exception as e:
                    error_messages.append(f"Customer email error: {str(e)}")
                    logger.error(f"Error sending customer email: {str(e)}")
                
                # Determine response based on email sending results
                if company_email_sent and customer_email_sent:
                    return Response(
                        {
                            'success': True,
                            'message': 'Message sent successfully! We will get back to you soon.',
                            'submission_id': submission.id
                        },
                        status=status.HTTP_200_OK
                    )
                elif company_email_sent or customer_email_sent:
                    return Response(
                        {
                            'success': True,
                            'message': 'Your message was saved. Some email notifications failed, but our team will contact you.',
                            'submission_id': submission.id
                        },
                        status=status.HTTP_200_OK
                    )
                else:
                    # Return error but submission was saved
                    return Response(
                        {
                            'success': False,
                            'message': 'Your message was saved but email notification failed. We will contact you manually.',
                            'submission_id': submission.id,
                            'errors': error_messages
                        },
                        status=status.HTTP_200_OK
                    )
                
            except Exception as e:
                logger.error(f"Unexpected error: {str(e)}")
                return Response(
                    {
                        'success': False, 
                        'message': 'An unexpected error occurred. Please try again or contact us directly.'
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        
        return Response(
            {'success': False, 'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
    

from django.core.mail import send_mail
from django.http import JsonResponse
def safaris_email_config(request):
    """Test email configuration"""
    try:
        send_mail(
            subject='Test Email from Nature Pulse',
            message='This is a test email to verify email configuration.',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['info@naturepulseexpeditions.com'],  # Your email
            fail_silently=False,
        )
        return JsonResponse({'success': True, 'message': 'Email sent successfully!'})
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)})
    

def test_contacts_api(request):
    """Simple test view to check if contacts exist in database"""
    try:
        contacts = ContactSubmission.objects.all()
        
        if contacts.exists():
            data = []
            for contact in contacts:
                data.append({
                    'id': contact.id,
                    'name': f"{contact.first_name} {contact.last_name}",
                    'email': contact.email,
                    'phone': contact.phone,
                    'message_preview': contact.message[:50] + '...' if len(contact.message) > 50 else contact.message,
                    'submitted_at': contact.submitted_at.strftime('%Y-%m-%d %H:%M:%S'),
                    'is_processed': contact.is_processed,
                })
            
            return JsonResponse({
                'success': True,
                'count': len(data),
                'data': data,
                'message': f'Found {len(data)} contacts in database'
            })
        else:
            return JsonResponse({
                'success': True,
                'count': 0,
                'data': [],
                'message': 'No contacts found in database. Please submit a test contact form first.'
            })
            
    except Exception as e:
        return JsonResponse({
            'success': False,
            'error': str(e),
            'message': 'Error fetching contacts from database'
        }, status=500)
    


