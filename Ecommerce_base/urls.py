# Ecommerce_base\urls.py
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

app_name = "Ecommerce_base"

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users/", include("Ecommerce_users.urls", namespace="Ecommerce_users")),
    path("profiles/", include("Ecommerce_profiles.urls")),
    path("", include("Ecommerce_home.urls")),
    path("products/", include("Ecommerce_products.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
