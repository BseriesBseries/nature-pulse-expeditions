from django.db import models
from django.utils import timezone

class ContactSubmission(models.Model):
    """
    Model to store contact form submissions
    """
    first_name = models.CharField(max_length=100, verbose_name="First Name")
    last_name = models.CharField(max_length=100, verbose_name="Last Name")
    email = models.EmailField(max_length=254, verbose_name="Email Address")
    phone = models.CharField(max_length=20, verbose_name="Phone Number", help_text="Include country code")
    message = models.TextField(verbose_name="Message")
    submitted_at = models.DateTimeField(auto_now_add=True, verbose_name="Submission Date")
    is_processed = models.BooleanField(default=False, verbose_name="Is Processed", help_text="Mark as True when the inquiry has been responded to")
    processed_at = models.DateTimeField(null=True, blank=True, verbose_name="Processed Date")
    notes = models.TextField(blank=True, verbose_name="Staff Notes", help_text="Internal notes for staff")
    ip_address = models.GenericIPAddressField( null=True, blank=True, verbose_name="IP Address")
    user_agent = models.TextField( blank=True, verbose_name="User Agent", help_text="Browser and device information")

    class Meta:
        verbose_name = "Contact Submission"
        verbose_name_plural = "Contact Submissions"
        ordering = ['-submitted_at']
        indexes = [models.Index(fields=['submitted_at']), models.Index(fields=['is_processed']),models.Index(fields=['email']),]

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.submitted_at.strftime('%Y-%m-%d %H:%M')}"

    def mark_as_processed(self):
        """Mark submission as processed"""
        self.is_processed = True
        self.processed_at = timezone.now()
        self.save()

    def get_full_name(self):
        """Return the full name"""
        return f"{self.first_name} {self.last_name}"

    def get_short_message(self):
        """Return first 50 characters of the message"""
        return self.message[:50] + '...' if len(self.message) > 50 else self.message
    

# contact/models.py (add this to the same file)

class NewsletterSubscriber(models.Model):
    """
    Model to store newsletter subscribers
    """
    email = models.EmailField(unique=True, verbose_name="Email Address")
    first_name = models.CharField(max_length=100, blank=True, verbose_name="First Name")
    subscribed_at = models.DateTimeField(auto_now_add=True, verbose_name="Subscription Date")
    is_active = models.BooleanField(default=True, verbose_name="Is Active")
    unsubscribe_token = models.CharField(max_length=100, unique=True, blank=True, editable=False)

    class Meta:
        verbose_name = "Newsletter Subscriber"
        verbose_name_plural = "Newsletter Subscribers"
        ordering = ['-subscribed_at']

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        if not self.unsubscribe_token:
            import uuid
            self.unsubscribe_token = str(uuid.uuid4())
        super().save(*args, **kwargs)



# contact/models.py (add this to the same file)

class FAQ(models.Model):
    """
    Model to store frequently asked questions
    """
    CATEGORY_CHOICES = [
        ('safari', 'Safari Packages'),
        ('trekking', 'Mountain Trekking'),
        ('booking', 'Booking & Payment'),
        ('transport', 'Transportation'),
        ('accommodation', 'Accommodation'),
        ('general', 'General Questions'),
    ]
    
    question = models.TextField(verbose_name="Question")
    answer = models.TextField(verbose_name="Answer")
    category = models.CharField(
        max_length=20, choices=CATEGORY_CHOICES, default='general', verbose_name="Category")
    order = models.IntegerField(default=0, verbose_name="Display Order")
    is_active = models.BooleanField(default=True, verbose_name="Is Active")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created Date")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated Date")

    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
        ordering = ['order', 'category']

    def __str__(self):
        return self.question[:100]
    

# contact/models.py (add this to the same file)

class InquiryType(models.Model):
    """
    Model to categorize different types of inquiries
    """
    name = models.CharField(max_length=100, verbose_name="Inquiry Type")
    description = models.TextField(blank=True, verbose_name="Description")
    is_active = models.BooleanField(default=True, verbose_name="Is Active")
    order = models.IntegerField(default=0, verbose_name="Display Order")

    class Meta:
        verbose_name = "Inquiry Type"
        verbose_name_plural = "Inquiry Types"
        ordering = ['order', 'name']

    def __str__(self):
        return self.name