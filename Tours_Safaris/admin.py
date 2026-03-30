# contact/admin.py
from django.contrib import admin
from .models import ContactSubmission, NewsletterSubscriber, FAQ, InquiryType

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('get_full_name', 'email', 'phone', 'submitted_at', 'is_processed')
    list_filter = ('is_processed', 'submitted_at')
    search_fields = ('first_name', 'last_name', 'email', 'phone', 'message')
    readonly_fields = ('submitted_at', 'ip_address', 'user_agent')
    fieldsets = (
        ('Personal Information', {
            'fields': ('first_name', 'last_name', 'email', 'phone')
        }),
        ('Message', {
            'fields': ('message',)
        }),
        ('Processing', {
            'fields': ('is_processed', 'processed_at', 'notes')
        }),
        ('Technical', {
            'fields': ('submitted_at', 'ip_address', 'user_agent'),
            'classes': ('collapse',)
        }),
    )
    actions = ['mark_as_processed']

    def mark_as_processed(self, request, queryset):
        for submission in queryset:
            submission.mark_as_processed()
        self.message_user(request, f"{queryset.count()} submissions marked as processed.")
    mark_as_processed.short_description = "Mark selected submissions as processed"

    def get_full_name(self, obj):
        return obj.get_full_name()
    get_full_name.short_description = "Name"
    get_full_name.admin_order_field = 'first_name'

@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'subscribed_at', 'is_active')
    list_filter = ('is_active', 'subscribed_at')
    search_fields = ('email', 'first_name')
    actions = ['activate_subscribers', 'deactivate_subscribers']

    def activate_subscribers(self, request, queryset):
        queryset.update(is_active=True)
        self.message_user(request, f"{queryset.count()} subscribers activated.")
    activate_subscribers.short_description = "Activate selected subscribers"

    def deactivate_subscribers(self, request, queryset):
        queryset.update(is_active=False)
        self.message_user(request, f"{queryset.count()} subscribers deactivated.")
    deactivate_subscribers.short_description = "Deactivate selected subscribers"

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'category', 'order', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('question', 'answer')
    ordering = ('order',)

@admin.register(InquiryType)
class InquiryTypeAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name',)