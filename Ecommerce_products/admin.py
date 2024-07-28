# Ecommerce_products/admin.py
from django.contrib import admin
from .models import Product, ProductImage, Category, Review


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "stock", "category", "created_at", "updated_at")
    inlines = [ProductImageInline]


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)


class ReviewAdmin(admin.ModelAdmin):
    list_display = ("product", "name", "email", "rating", "approved", "created_at")
    list_filter = ("approved", "created_at")
    search_fields = ("name", "email", "review")
    actions = ["approve_reviews"]

    def approve_reviews(self, request, queryset):
        queryset.update(approved=True)


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Review, ReviewAdmin)
