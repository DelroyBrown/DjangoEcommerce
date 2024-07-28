# Ecommerce_products\models.py
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, default="")
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.CharField(max_length=5000, blank=False, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(blank=True, null=True)
    category = models.ForeignKey(
        Category,
        blank=True,
        null=True,
        related_name="products",
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="images"
    )
    image = models.ImageField(upload_to="product-images", blank=True, null=True)

    def __str__(self):
        return f"Image for {self.product.name}"
