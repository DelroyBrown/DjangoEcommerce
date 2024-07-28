# Ecommerce_users\forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = (
            "username",
            "email",
            "first_name",
            "last_name",
            "street_address1",
            "street_address2",
            "city_town",
            "state",
            "postal_code",
            "country",
            "date_of_birth",
            "profile_picture",
            "is_customer",
            "is_seller",
        )


class CustomUserChangeForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = (
            "username",
            "email",
            "first_name",
            "last_name",
            "street_address1",
            "street_address2",
            "city_town",
            "state",
            "postal_code",
            "country",
            "date_of_birth",
            "profile_picture",
        )
