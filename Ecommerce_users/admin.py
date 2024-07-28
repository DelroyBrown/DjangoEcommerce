# Ecommerce_users/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            None,
            {
                "fields": (
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
                ),
            },
        ),
    )
    add_fieldsets = (
        *UserAdmin.add_fieldsets,
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "username",
                    "password1",
                    "password2",
                    "first_name",
                    "last_name",
                    "email",
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
                ),
            },
        ),
    )


admin.site.register(CustomUser, CustomUserAdmin)
