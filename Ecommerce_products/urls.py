# Ecommerce_products\urls.py
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from .views import (
    ProductViewSet,
    ProductListView,
    ProductCreateView,
    ProductUpdateView,
    ProductDeleteView,
    ProductDetailView,
)

app_name = "Ecommerce_products"

router = DefaultRouter()
router.register(r"products", ProductViewSet, basename="products")

urlpatterns = [
    path("", include(router.urls)),
    path("list/", ProductListView.as_view(), name="product_list"),
    path("add/", ProductCreateView.as_view(), name="product_create"),
    path("products/<int:pk>/edit/", ProductUpdateView.as_view(), name="product_edit"),
    path(
        "products/<int:pk>/delete/", ProductDeleteView.as_view(), name="product_delete"
    ),
    path("<int:pk>/", ProductDetailView.as_view(), name="product_detail"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
