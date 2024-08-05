# Ecommerce_products\models.py
from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, default="")
    description = models.TextField(blank=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

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
    image_1 = models.ImageField(upload_to="product-images", blank=False, null=False)
    image_2 = models.ImageField(upload_to="product-images", blank=True, null=True)
    image_3 = models.ImageField(upload_to="product-images", blank=True, null=True)
    image_4 = models.ImageField(upload_to="product-images", blank=True, null=True)
    image_5 = models.ImageField(upload_to="product-images", blank=True, null=True)

    museum_name = models.CharField(max_length=100, blank=False, null=False, default="")
    museum_location = models.CharField(
        max_length=150, blank=False, null=False, default=""
    )
    museum_details = models.TextField(default='', blank=False, null=False)
    opening_time = models.DateTimeField()
    closing_time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


# class ProductImage(models.Model):
#     product = models.ForeignKey(
#         Product, on_delete=models.CASCADE, related_name="images"
#     )
#     image = models.ImageField(upload_to="product-images", blank=True, null=True)

#     def __str__(self):
#         return f"Image for {self.product.name}"


class Review(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="reviews"
    )
    name = models.CharField(max_length=100)
    email = models.EmailField()
    review = models.TextField()
    rating = models.IntegerField()
    approved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.product.name} by {self.name}"
