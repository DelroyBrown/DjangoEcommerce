# Ecommerce_products\admin.py
from django.contrib import admin
from .models import Product, ProductImage, Category


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "stock", "category", "created_at", "updated_at")
    inlines = [ProductImageInline]


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)
admin.site.register(Category, CategoryAdmin)
