# Ecommerce_users\models.py
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    # Basic Information
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)

    # Contact Information
    street_address1 = models.CharField(max_length=255, blank=False, null=False)
    street_address2 = models.CharField(max_length=255, blank=True, null=True)
    city_town = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=50, blank=True, null=True)
    postal_code = models.CharField(max_length=20, blank=False, null=False)
    country = models.CharField(max_length=50, blank=False, null=False)

    # Additional Information
    date_of_birth = models.DateField(null=True, blank=True)
    profile_picture = models.ImageField(
        upload_to="profile_pictures/", blank=True, null=True
    )

    # User Type (Optional)
    is_customer = models.BooleanField(default=True)
    is_seller = models.BooleanField(default=False)

    def __str__(self):
        return self.first_name
