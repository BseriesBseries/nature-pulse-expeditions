# Tours_Safaris/serializers.py
from rest_framework import serializers
from .models import (
    ContactSubmission, 
    NewsletterSubscriber, 
    FAQ, 
    InquiryType
)


# ==================== CONTACT FORM SERIALIZER ====================
class ContactFormSerializer(serializers.Serializer):
    """
    Serializer for contact form submission (incoming data from frontend)
    """
    firstName = serializers.CharField(max_length=100)
    lastName = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20)
    message = serializers.CharField()
    inquiry_type = serializers.IntegerField(required=False, allow_null=True)
    subscribe_newsletter = serializers.BooleanField(required=False, default=False)


# ==================== CONTACT SUBMISSION SERIALIZERS ====================
class ContactSubmissionSerializer(serializers.ModelSerializer):
    """
    Serializer for ContactSubmission model (read/write from database)
    """
    full_name = serializers.SerializerMethodField()
    short_message = serializers.SerializerMethodField()
    
    class Meta:
        model = ContactSubmission
        fields = [
            'id',
            'first_name',
            'last_name',
            'full_name',
            'email',
            'phone',
            'message',
            'short_message',
            'submitted_at',
            'is_processed',
            'processed_at',
            'notes',
            'ip_address',
            'user_agent'
        ]
        read_only_fields = [
            'id',
            'submitted_at',
            'processed_at',
            'ip_address',
            'user_agent'
        ]
    
    def get_full_name(self, obj):
        """Return the full name"""
        return f"{obj.first_name} {obj.last_name}"
    
    def get_short_message(self, obj):
        """Return first 60 characters of the message"""
        return obj.message[:60] + '...' if len(obj.message) > 60 else obj.message


class ContactSubmissionListSerializer(serializers.ModelSerializer):
    """
    Simplified serializer for list view (faster loading)
    """
    full_name = serializers.SerializerMethodField()
    
    class Meta:
        model = ContactSubmission
        fields = [
            'id',
            'first_name',
            'last_name',
            'full_name',
            'email',
            'phone',
            'message',
            'submitted_at',
            'is_processed',
            'processed_at'
        ]
    
    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"


class ContactSubmissionDetailSerializer(serializers.ModelSerializer):
    """
    Detailed serializer for single contact submission view
    """
    full_name = serializers.SerializerMethodField()
    
    class Meta:
        model = ContactSubmission
        fields = '__all__'
    
    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"


class ContactSubmissionProcessSerializer(serializers.Serializer):
    """
    Serializer for marking a submission as processed
    """
    notes = serializers.CharField(required=False, allow_blank=True)


# ==================== NEWSLETTER SUBSCRIBER SERIALIZERS ====================
class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    """
    Serializer for NewsletterSubscriber model
    """
    class Meta:
        model = NewsletterSubscriber
        fields = [
            'id',
            'email',
            'first_name',
            'subscribed_at',
            'is_active',
            'unsubscribe_token'
        ]
        read_only_fields = [
            'id',
            'subscribed_at',
            'unsubscribe_token'
        ]


class NewsletterSubscribeSerializer(serializers.Serializer):
    """
    Serializer for subscribing to newsletter
    """
    email = serializers.EmailField()
    first_name = serializers.CharField(max_length=100, required=False, allow_blank=True)


class NewsletterUnsubscribeSerializer(serializers.Serializer):
    """
    Serializer for unsubscribing from newsletter
    """
    token = serializers.CharField(max_length=100)


# ==================== FAQ SERIALIZERS ====================
class FAQSerializer(serializers.ModelSerializer):
    """
    Serializer for FAQ model
    """
    category_display = serializers.SerializerMethodField()
    
    class Meta:
        model = FAQ
        fields = [
            'id',
            'question',
            'answer',
            'category',
            'category_display',
            'order',
            'is_active',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def get_category_display(self, obj):
        """Return the display name of the category"""
        category_dict = dict(FAQ.CATEGORY_CHOICES)
        return category_dict.get(obj.category, obj.category)


class FAQCreateUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer for creating/updating FAQs
    """
    class Meta:
        model = FAQ
        fields = [
            'question',
            'answer',
            'category',
            'order',
            'is_active'
        ]


# ==================== INQUIRY TYPE SERIALIZERS ====================
class InquiryTypeSerializer(serializers.ModelSerializer):
    """
    Serializer for InquiryType model
    """
    class Meta:
        model = InquiryType
        fields = [
            'id',
            'name',
            'description',
            'is_active',
            'order'
        ]
        read_only_fields = ['id']


# ==================== DASHBOARD STATS SERIALIZER ====================
class DashboardStatsSerializer(serializers.Serializer):
    """
    Serializer for dashboard statistics
    """
    total_submissions = serializers.IntegerField()
    pending_submissions = serializers.IntegerField()
    processed_submissions = serializers.IntegerField()
    last_7_days = serializers.IntegerField()
    last_30_days = serializers.IntegerField()
    response_rate = serializers.FloatField()
    
    # Newsletter stats
    newsletter_total = serializers.IntegerField()
    newsletter_active = serializers.IntegerField()
    newsletter_inactive = serializers.IntegerField()


class RecentSubmissionSerializer(serializers.Serializer):
    """
    Serializer for recent submissions in dashboard
    """
    id = serializers.IntegerField()
    name = serializers.CharField()
    email = serializers.EmailField()
    submitted_at = serializers.CharField()
    is_processed = serializers.BooleanField()


# ==================== ADMIN DASHBOARD SERIALIZERS ====================
class AdminContactListSerializer(serializers.Serializer):
    """
    Serializer for admin contact list
    """
    id = serializers.IntegerField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    full_name = serializers.CharField()
    email = serializers.EmailField()
    phone = serializers.CharField()
    message = serializers.CharField()
    short_message = serializers.CharField()
    submitted_at = serializers.DateTimeField()
    is_processed = serializers.BooleanField()
    processed_at = serializers.DateTimeField(allow_null=True)
    notes = serializers.CharField(allow_blank=True)


class AdminContactDetailSerializer(serializers.Serializer):
    """
    Serializer for admin contact detail
    """
    id = serializers.IntegerField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()
    phone = serializers.CharField()
    message = serializers.CharField()
    submitted_at = serializers.DateTimeField()
    is_processed = serializers.BooleanField()
    processed_at = serializers.DateTimeField(allow_null=True)
    notes = serializers.CharField(allow_blank=True)
    ip_address = serializers.CharField(allow_null=True)
    user_agent = serializers.CharField(allow_blank=True)


class AdminSubscriberListSerializer(serializers.Serializer):
    """
    Serializer for admin subscriber list
    """
    id = serializers.IntegerField()
    email = serializers.EmailField()
    first_name = serializers.CharField()
    subscribed_at = serializers.DateTimeField()
    is_active = serializers.BooleanField()


# ==================== API RESPONSE SERIALIZERS ====================
class ApiResponseSerializer(serializers.Serializer):
    """
    Standard API response serializer
    """
    success = serializers.BooleanField()
    message = serializers.CharField(required=False, allow_blank=True)
    data = serializers.JSONField(required=False, allow_null=True)
    errors = serializers.JSONField(required=False, allow_null=True)
    count = serializers.IntegerField(required=False)


class ErrorResponseSerializer(serializers.Serializer):
    """
    Error response serializer
    """
    success = serializers.BooleanField(default=False)
    error = serializers.CharField()
    code = serializers.IntegerField(required=False)