# Tours_Safaris/urls.py
from django.urls import path
#from django.views.generic import TemplateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views
from .admin_views import (
    AdminLoginView,
    ContactSubmissionsListView,
    ContactSubmissionDetailView,
    NewsletterSubscribersListView,
    NewsletterSubscriberDetailView,
    FAQListView,
    FAQDetailView,
    FAQCreateView,
    InquiryTypeListView,
    InquiryTypeDetailView,
    InquiryTypeCreateView,
    DashboardStatsView,
)

urlpatterns = [
    #From react for production
    #path('', TemplateView.as_view(template_name='index.html')),

    # Contact form submission (public)
    path('contact/submit/', views.ContactFormView.as_view(), name='contact-submit'),
    path('safaris_email/', views.safaris_email_config, name='safaris-email'),
    path('test-contacts/', views.test_contacts_api, name='test-contacts'),
    
    # JWT Authentication (for admin login)
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Admin API endpoints
    path('admin/check-auth/', AdminLoginView.as_view(), name='admin-check'),
    
    # Contact submissions
    path('admin/contacts/', ContactSubmissionsListView.as_view(), name='admin-contacts-list'),
    path('admin/contacts/<int:submission_id>/', ContactSubmissionDetailView.as_view(), name='admin-contact-detail'),
    
    # Newsletter subscribers
    path('admin/subscribers/', NewsletterSubscribersListView.as_view(), name='admin-subscribers-list'),
    path('admin/subscribers/<int:subscriber_id>/', NewsletterSubscriberDetailView.as_view(), name='admin-subscriber-detail'),
    
    # FAQs
    path('admin/faqs/', FAQListView.as_view(), name='admin-faqs-list'),
    path('admin/faqs/create/', FAQCreateView.as_view(), name='admin-faq-create'),
    path('admin/faqs/<int:faq_id>/', FAQDetailView.as_view(), name='admin-faq-detail'),
    
    # Inquiry types
    path('admin/inquiry-types/', InquiryTypeListView.as_view(), name='admin-inquiry-types-list'),
    path('admin/inquiry-types/create/', InquiryTypeCreateView.as_view(), name='admin-inquiry-type-create'),
    path('admin/inquiry-types/<int:inquiry_type_id>/', InquiryTypeDetailView.as_view(), name='admin-inquiry-type-detail'),
    
    # Dashboard stats
    path('admin/stats/', DashboardStatsView.as_view(), name='admin-stats'),
]