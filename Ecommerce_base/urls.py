# Ecommerce_base\urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users/", include("Ecommerce_users.urls", namespace="Ecommerce_users")),
    path("profiles/", include("Ecommerce_profiles.urls")),
    path("", include("Ecommerce_home.urls")),
]
