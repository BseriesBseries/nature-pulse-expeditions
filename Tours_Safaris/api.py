# contact/api.py
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.db.models import Count, Q
from django.utils import timezone
from .models import ContactSubmission, NewsletterSubscriber, FAQ, InquiryType
from .serializers import (
    ContactSubmissionSerializer, 
    NewsletterSubscriberSerializer,
    FAQSerializer,
    InquiryTypeSerializer,
    DashboardStatsSerializer
)

class ContactSubmissionViewSet(viewsets.ModelViewSet):
    """
    API endpoint for contact submissions
    """
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter by status
        status = self.request.query_params.get('status', None)
        if status == 'processed':
            queryset = queryset.filter(is_processed=True)
        elif status == 'pending':
            queryset = queryset.filter(is_processed=False)
        
        # Search
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(
                Q(first_name__icontains=search) |
                Q(last_name__icontains=search) |
                Q(email__icontains=search) |
                Q(phone__icontains=search) |
                Q(message__icontains=search)
            )
        
        return queryset
    
    @action(detail=True, methods=['post'])
    def mark_processed(self, request, pk=None):
        """
        Mark a submission as processed
        """
        submission = self.get_object()
        submission.mark_as_processed()
        submission.notes = request.data.get('notes', submission.notes)
        submission.save()
        return Response({'status': 'marked as processed'})
    
    @action(detail=False, methods=['get'])
    def stats(self, request):
        """
        Get dashboard statistics
        """
        total = ContactSubmission.objects.count()
        pending = ContactSubmission.objects.filter(is_processed=False).count()
        processed = ContactSubmission.objects.filter(is_processed=True).count()
        
        # Last 7 days submissions
        last_7_days = ContactSubmission.objects.filter(
            submitted_at__gte=timezone.now() - timezone.timedelta(days=7)
        ).count()
        
        # Submissions by type (if you have inquiry_type field)
        # by_type = ContactSubmission.objects.values('inquiry_type').annotate(count=Count('id'))
        
        stats = {
            'total_submissions': total,
            'pending_submissions': pending,
            'processed_submissions': processed,
            'last_7_days': last_7_days,
            'response_rate': round((processed / total * 100) if total > 0 else 0, 1)
        }
        
        return Response(stats)


class NewsletterSubscriberViewSet(viewsets.ModelViewSet):
    """
    API endpoint for newsletter subscribers
    """
    queryset = NewsletterSubscriber.objects.all()
    serializer_class = NewsletterSubscriberSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter by active status
        is_active = self.request.query_params.get('is_active', None)
        if is_active is not None:
            queryset = queryset.filter(is_active=is_active.lower() == 'true')
        
        # Search
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(
                Q(email__icontains=search) |
                Q(first_name__icontains=search)
            )
        
        return queryset
    
    @action(detail=True, methods=['post'])
    def unsubscribe(self, request, pk=None):
        """
        Unsubscribe a subscriber
        """
        subscriber = self.get_object()
        subscriber.is_active = False
        subscriber.save()
        return Response({'status': 'unsubscribed'})


class FAQViewSet(viewsets.ModelViewSet):
    """
    API endpoint for FAQs
    """
    queryset = FAQ.objects.filter(is_active=True)
    serializer_class = FAQSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter by category
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        
        return queryset


class InquiryTypeViewSet(viewsets.ModelViewSet):
    """
    API endpoint for inquiry types
    """
    queryset = InquiryType.objects.filter(is_active=True)
    serializer_class = InquiryTypeSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]