# Tours_Safaris/admin_views.py
import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.db.models import Q, Count
from django.utils import timezone
from datetime import timedelta
from .models import ContactSubmission, NewsletterSubscriber, FAQ, InquiryType

# Set up logging
logger = logging.getLogger(__name__)


class AdminLoginView(APIView):
    """
    Check if user is authenticated
    """
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        logger.info(f"Admin login check - User: {request.user}")
        return Response({
            'success': True,
            'message': 'Authenticated',
            'user': request.user.email if hasattr(request.user, 'email') else request.user.username
        })


# ==================== CONTACT SUBMISSIONS VIEWS ====================

class ContactSubmissionsListView(APIView):
    """
    Get all contact submissions
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request):
        try:
            logger.info(f"ContactSubmissionsListView called by user: {request.user}")
            
            # Get ALL submissions
            submissions = ContactSubmission.objects.all().order_by('-submitted_at')
            
            # Log the count
            total_count = submissions.count()
            logger.info(f"Total submissions found: {total_count}")
            
            # Prepare response data
            data = []
            for sub in submissions:
                data.append({
                    'id': sub.id,
                    'first_name': sub.first_name,
                    'last_name': sub.last_name,
                    'full_name': f"{sub.first_name} {sub.last_name}",
                    'email': sub.email,
                    'phone': sub.phone,
                    'message': sub.message,
                    'short_message': sub.message[:60] + '...' if len(sub.message) > 60 else sub.message,
                    'submitted_at': sub.submitted_at.isoformat(),
                    'submitted_at_display': sub.submitted_at.strftime('%Y-%m-%d %H:%M:%S'),
                    'is_processed': sub.is_processed,
                    'processed_at': sub.processed_at.isoformat() if sub.processed_at else None,
                    'notes': sub.notes,
                })
            
            response_data = {
                'success': True,
                'count': len(data),
                'data': data
            }
            
            logger.info(f"Returning {len(data)} submissions")
            return Response(response_data)
            
        except Exception as e:
            logger.error(f"Error in ContactSubmissionsListView: {str(e)}", exc_info=True)
            return Response({
                'success': False,
                'error': str(e),
                'message': 'Error fetching submissions'
            }, status=500)


class ContactSubmissionDetailView(APIView):
    """
    Get, update, or delete a specific contact submission
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request, submission_id):
        """Get single submission details"""
        try:
            logger.info(f"Fetching submission ID: {submission_id}")
            submission = ContactSubmission.objects.get(id=submission_id)
            data = {
                'id': submission.id,
                'first_name': submission.first_name,
                'last_name': submission.last_name,
                'full_name': f"{submission.first_name} {submission.last_name}",
                'email': submission.email,
                'phone': submission.phone,
                'message': submission.message,
                'submitted_at': submission.submitted_at.isoformat(),
                'submitted_at_display': submission.submitted_at.strftime('%Y-%m-%d %H:%M:%S'),
                'is_processed': submission.is_processed,
                'processed_at': submission.processed_at.isoformat() if submission.processed_at else None,
                'notes': submission.notes,
                'ip_address': submission.ip_address,
                'user_agent': submission.user_agent,
            }
            return Response({'success': True, 'data': data})
        except ContactSubmission.DoesNotExist:
            logger.warning(f"Submission ID {submission_id} not found")
            return Response({'success': False, 'error': 'Submission not found'}, status=404)
        except Exception as e:
            logger.error(f"Error fetching submission {submission_id}: {str(e)}", exc_info=True)
            return Response({'success': False, 'error': str(e)}, status=500)
    
    def post(self, request, submission_id):
        """Mark submission as processed and add notes"""
        try:
            logger.info(f"Marking submission {submission_id} as processed")
            submission = ContactSubmission.objects.get(id=submission_id)
            
            submission.is_processed = True
            submission.processed_at = timezone.now()
            
            notes = request.data.get('notes', '')
            if notes:
                submission.notes = notes
            
            submission.save()
            
            return Response({
                'success': True,
                'message': 'Submission marked as processed',
                'processed_at': submission.processed_at.isoformat()
            })
        except ContactSubmission.DoesNotExist:
            logger.warning(f"Submission ID {submission_id} not found for marking")
            return Response({'success': False, 'error': 'Submission not found'}, status=404)
        except Exception as e:
            logger.error(f"Error marking submission {submission_id}: {str(e)}", exc_info=True)
            return Response({'success': False, 'error': str(e)}, status=500)
    
    def delete(self, request, submission_id):
        """Delete a submission"""
        try:
            logger.info(f"Deleting submission ID: {submission_id}")
            submission = ContactSubmission.objects.get(id=submission_id)
            submission.delete()
            return Response({'success': True, 'message': 'Submission deleted successfully'})
        except ContactSubmission.DoesNotExist:
            logger.warning(f"Submission ID {submission_id} not found for deletion")
            return Response({'success': False, 'error': 'Submission not found'}, status=404)
        except Exception as e:
            logger.error(f"Error deleting submission {submission_id}: {str(e)}", exc_info=True)
            return Response({'success': False, 'error': str(e)}, status=500)


# ==================== NEWSLETTER SUBSCRIBERS VIEWS ====================

class NewsletterSubscribersListView(APIView):
    """
    Get all newsletter subscribers
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request):
        try:
            logger.info(f"NewsletterSubscribersListView called by user: {request.user}")
            
            subscribers = NewsletterSubscriber.objects.all().order_by('-subscribed_at')
            
            data = []
            for sub in subscribers:
                data.append({
                    'id': sub.id,
                    'email': sub.email,
                    'first_name': sub.first_name,
                    'subscribed_at': sub.subscribed_at.isoformat(),
                    'subscribed_at_display': sub.subscribed_at.strftime('%Y-%m-%d %H:%M:%S'),
                    'is_active': sub.is_active,
                })
            
            return Response({
                'success': True,
                'count': len(data),
                'data': data
            })
        except Exception as e:
            logger.error(f"Error in NewsletterSubscribersListView: {str(e)}", exc_info=True)
            return Response({
                'success': False,
                'error': str(e)
            }, status=500)


class NewsletterSubscriberDetailView(APIView):
    """
    Get, update, or delete a specific subscriber
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request, subscriber_id):
        try:
            subscriber = NewsletterSubscriber.objects.get(id=subscriber_id)
            data = {
                'id': subscriber.id,
                'email': subscriber.email,
                'first_name': subscriber.first_name,
                'subscribed_at': subscriber.subscribed_at.isoformat(),
                'is_active': subscriber.is_active,
            }
            return Response({'success': True, 'data': data})
        except NewsletterSubscriber.DoesNotExist:
            return Response({'success': False, 'error': 'Subscriber not found'}, status=404)
    
    def post(self, request, subscriber_id):
        try:
            subscriber = NewsletterSubscriber.objects.get(id=subscriber_id)
            is_active = request.data.get('is_active', not subscriber.is_active)
            subscriber.is_active = is_active
            subscriber.save()
            return Response({
                'success': True,
                'message': f"Subscriber {'activated' if is_active else 'deactivated'} successfully",
                'is_active': subscriber.is_active
            })
        except NewsletterSubscriber.DoesNotExist:
            return Response({'success': False, 'error': 'Subscriber not found'}, status=404)
    
    def delete(self, request, subscriber_id):
        try:
            subscriber = NewsletterSubscriber.objects.get(id=subscriber_id)
            subscriber.delete()
            return Response({'success': True, 'message': 'Subscriber deleted successfully'})
        except NewsletterSubscriber.DoesNotExist:
            return Response({'success': False, 'error': 'Subscriber not found'}, status=404)


# ==================== FAQ VIEWS ====================

class FAQListView(APIView):
    """
    Get all FAQs
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request):
        try:
            faqs = FAQ.objects.all().order_by('order', 'category')
            
            data = []
            for faq in faqs:
                data.append({
                    'id': faq.id,
                    'question': faq.question,
                    'answer': faq.answer,
                    'category': faq.category,
                    'category_display': dict(FAQ.CATEGORY_CHOICES).get(faq.category, faq.category),
                    'order': faq.order,
                    'is_active': faq.is_active,
                    'created_at': faq.created_at.isoformat(),
                    'updated_at': faq.updated_at.isoformat(),
                })
            
            return Response({
                'success': True,
                'count': len(data),
                'data': data
            })
        except Exception as e:
            logger.error(f"Error in FAQListView: {str(e)}", exc_info=True)
            return Response({'success': False, 'error': str(e)}, status=500)


class FAQDetailView(APIView):
    """
    Get, update, or delete a specific FAQ
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request, faq_id):
        try:
            faq = FAQ.objects.get(id=faq_id)
            data = {
                'id': faq.id,
                'question': faq.question,
                'answer': faq.answer,
                'category': faq.category,
                'category_display': dict(FAQ.CATEGORY_CHOICES).get(faq.category, faq.category),
                'order': faq.order,
                'is_active': faq.is_active,
            }
            return Response({'success': True, 'data': data})
        except FAQ.DoesNotExist:
            return Response({'success': False, 'error': 'FAQ not found'}, status=404)
    
    def put(self, request, faq_id):
        try:
            faq = FAQ.objects.get(id=faq_id)
            faq.question = request.data.get('question', faq.question)
            faq.answer = request.data.get('answer', faq.answer)
            faq.category = request.data.get('category', faq.category)
            faq.order = request.data.get('order', faq.order)
            faq.is_active = request.data.get('is_active', faq.is_active)
            faq.save()
            
            return Response({
                'success': True,
                'message': 'FAQ updated successfully',
                'data': {
                    'id': faq.id,
                    'question': faq.question,
                    'answer': faq.answer,
                    'category': faq.category,
                    'order': faq.order,
                    'is_active': faq.is_active,
                }
            })
        except FAQ.DoesNotExist:
            return Response({'success': False, 'error': 'FAQ not found'}, status=404)
    
    def delete(self, request, faq_id):
        try:
            faq = FAQ.objects.get(id=faq_id)
            faq.delete()
            return Response({'success': True, 'message': 'FAQ deleted successfully'})
        except FAQ.DoesNotExist:
            return Response({'success': False, 'error': 'FAQ not found'}, status=404)


class FAQCreateView(APIView):
    """
    Create a new FAQ
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def post(self, request):
        try:
            faq = FAQ.objects.create(
                question=request.data.get('question'),
                answer=request.data.get('answer'),
                category=request.data.get('category', 'general'),
                order=request.data.get('order', 0),
                is_active=request.data.get('is_active', True),
            )
            
            return Response({
                'success': True,
                'message': 'FAQ created successfully',
                'data': {
                    'id': faq.id,
                    'question': faq.question,
                    'answer': faq.answer,
                    'category': faq.category,
                    'order': faq.order,
                    'is_active': faq.is_active,
                }
            }, status=201)
        except Exception as e:
            return Response({'success': False, 'error': str(e)}, status=400)


# ==================== INQUIRY TYPES VIEWS ====================

class InquiryTypeListView(APIView):
    """
    Get all inquiry types
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request):
        try:
            inquiry_types = InquiryType.objects.all().order_by('order', 'name')
            
            data = []
            for it in inquiry_types:
                data.append({
                    'id': it.id,
                    'name': it.name,
                    'description': it.description,
                    'is_active': it.is_active,
                    'order': it.order,
                })
            
            return Response({
                'success': True,
                'count': len(data),
                'data': data
            })
        except Exception as e:
            logger.error(f"Error in InquiryTypeListView: {str(e)}", exc_info=True)
            return Response({'success': False, 'error': str(e)}, status=500)


class InquiryTypeDetailView(APIView):
    """
    Get, update, or delete a specific inquiry type
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request, inquiry_type_id):
        try:
            inquiry_type = InquiryType.objects.get(id=inquiry_type_id)
            data = {
                'id': inquiry_type.id,
                'name': inquiry_type.name,
                'description': inquiry_type.description,
                'is_active': inquiry_type.is_active,
                'order': inquiry_type.order,
            }
            return Response({'success': True, 'data': data})
        except InquiryType.DoesNotExist:
            return Response({'success': False, 'error': 'Inquiry type not found'}, status=404)
    
    def put(self, request, inquiry_type_id):
        try:
            inquiry_type = InquiryType.objects.get(id=inquiry_type_id)
            inquiry_type.name = request.data.get('name', inquiry_type.name)
            inquiry_type.description = request.data.get('description', inquiry_type.description)
            inquiry_type.is_active = request.data.get('is_active', inquiry_type.is_active)
            inquiry_type.order = request.data.get('order', inquiry_type.order)
            inquiry_type.save()
            
            return Response({
                'success': True,
                'message': 'Inquiry type updated successfully',
                'data': {
                    'id': inquiry_type.id,
                    'name': inquiry_type.name,
                    'description': inquiry_type.description,
                    'is_active': inquiry_type.is_active,
                    'order': inquiry_type.order,
                }
            })
        except InquiryType.DoesNotExist:
            return Response({'success': False, 'error': 'Inquiry type not found'}, status=404)
    
    def delete(self, request, inquiry_type_id):
        try:
            inquiry_type = InquiryType.objects.get(id=inquiry_type_id)
            inquiry_type.delete()
            return Response({'success': True, 'message': 'Inquiry type deleted successfully'})
        except InquiryType.DoesNotExist:
            return Response({'success': False, 'error': 'Inquiry type not found'}, status=404)


class InquiryTypeCreateView(APIView):
    """
    Create a new inquiry type
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def post(self, request):
        try:
            inquiry_type = InquiryType.objects.create(
                name=request.data.get('name'),
                description=request.data.get('description', ''),
                is_active=request.data.get('is_active', True),
                order=request.data.get('order', 0),
            )
            
            return Response({
                'success': True,
                'message': 'Inquiry type created successfully',
                'data': {
                    'id': inquiry_type.id,
                    'name': inquiry_type.name,
                    'description': inquiry_type.description,
                    'is_active': inquiry_type.is_active,
                    'order': inquiry_type.order,
                }
            }, status=201)
        except Exception as e:
            return Response({'success': False, 'error': str(e)}, status=400)


# ==================== DASHBOARD STATISTICS VIEW ====================

class DashboardStatsView(APIView):
    """
    Get dashboard statistics from all models
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    def get(self, request):
        try:
            # Contact submission stats
            total_contacts = ContactSubmission.objects.count()
            pending_contacts = ContactSubmission.objects.filter(is_processed=False).count()
            processed_contacts = ContactSubmission.objects.filter(is_processed=True).count()
            
            # Last 7 days contacts
            last_7_days_contacts = ContactSubmission.objects.filter(
                submitted_at__gte=timezone.now() - timedelta(days=7)
            ).count()
            
            # Last 30 days contacts
            last_30_days_contacts = ContactSubmission.objects.filter(
                submitted_at__gte=timezone.now() - timedelta(days=30)
            ).count()
            
            # Response rate
            response_rate = round((processed_contacts / total_contacts * 100) if total_contacts > 0 else 0, 1)
            
            # Newsletter stats
            total_subscribers = NewsletterSubscriber.objects.count()
            active_subscribers = NewsletterSubscriber.objects.filter(is_active=True).count()
            inactive_subscribers = NewsletterSubscriber.objects.filter(is_active=False).count()
            
            # FAQ stats
            total_faqs = FAQ.objects.count()
            active_faqs = FAQ.objects.filter(is_active=True).count()
            
            # Inquiry type stats
            total_inquiry_types = InquiryType.objects.count()
            active_inquiry_types = InquiryType.objects.filter(is_active=True).count()
            
            # Recent submissions (last 5)
            recent_submissions = ContactSubmission.objects.order_by('-submitted_at')[:5]
            recent_data = []
            for sub in recent_submissions:
                recent_data.append({
                    'id': sub.id,
                    'name': f"{sub.first_name} {sub.last_name}",
                    'email': sub.email,
                    'submitted_at': sub.submitted_at.strftime('%Y-%m-%d %H:%M'),
                    'is_processed': sub.is_processed
                })
            
            stats = {
                'contacts': {
                    'total_submissions': total_contacts,
                    'pending_submissions': pending_contacts,
                    'processed_submissions': processed_contacts,
                    'last_7_days': last_7_days_contacts,
                    'last_30_days': last_30_days_contacts,
                    'response_rate': response_rate,
                    'recent_submissions': recent_data
                },
                'newsletter': {
                    'total': total_subscribers,
                    'active': active_subscribers,
                    'inactive': inactive_subscribers
                },
                'faqs': {
                    'total': total_faqs,
                    'active': active_faqs
                },
                'inquiry_types': {
                    'total': total_inquiry_types,
                    'active': active_inquiry_types
                }
            }
            
            return Response({'success': True, 'stats': stats})
            
        except Exception as e:
            logger.error(f"Error in DashboardStatsView: {str(e)}", exc_info=True)
            return Response({'success': False, 'error': str(e)}, status=500)