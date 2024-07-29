# Ecommerce_cart\urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

app_name = "Ecommerce_cart"

urlpatterns = [
    path("", views.view_cart, name="view_cart"),
    path("add/<int:product_id>/", views.add_to_cart, name="add_to_cart"),
    path("remove/<int:item_id>/", views.remove_from_cart, name="remove_from_cart"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
