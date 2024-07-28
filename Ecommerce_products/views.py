# Ecommerce_products\views.py
from django.shortcuts import render, redirect, get_object_or_404
from rest_framework import viewsets
from django.urls import reverse_lazy
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView,
)
from .models import Product, ProductImage, Category
from .forms import ProductForm, ProductImageFormSet
from .serializers import ProductSerializer, CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductListView(ListView):
    model = Product
    template_name = "products/product_list.html"
    context_object_name = "products"


class ProductCreateView(CreateView):
    model = Product
    form_class = ProductForm
    template_name = "products/product_form.html"
    success_url = reverse_lazy("Ecommerce_products:product_list")

    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)
        if self.request.POST:
            data["images"] = ProductImageFormSet(self.request.POST, self.request.FILES)
        else:
            data["images"] = ProductImageFormSet()
        return data

    def form_valid(self, form):
        context = self.get_context_data()
        images = context["images"]
        self.object = form.save()
        if images.is_valid():
            images.instance = self.object
            images.save()
        return super().form_valid(form)


class ProductUpdateView(UpdateView):
    model = Product
    form_class = ProductForm
    template_name = "products/product_form.html"
    success_url = reverse_lazy("Ecommerce_products:product_list")

    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)
        if self.request.POST:
            data["images"] = ProductImageFormSet(
                self.request.POST, self.request.FILES, instance=self.object
            )
        else:
            data["images"] = ProductImageFormSet(instance=self.object)
        return data

    def form_valid(self, form):
        context = self.get_context_data()
        images = context["images"]
        self.object = form.save()
        if images.is_valid():
            images.instance = self.object
            images.save()
        return super().form_valid(form)


class ProductDeleteView(DeleteView):
    model = Product
    template_name = "products/product_confirm_delete.html"
    success_url = reverse_lazy("Ecommerce_products:product_list")


class ProductDetailView(DetailView):
    model = Product
    template_name = "products/product_detail.html"
    context_object_name = "product"
