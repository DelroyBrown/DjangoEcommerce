# Ecommerce_home\views.py
from django.shortcuts import render
from Ecommerce_products.models import Product


def home(request):
    all_products = Product.objects.all()
    return render(request, "home/home.html", {"all_products": all_products})
