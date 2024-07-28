from django import forms
from .models import Product, ProductImage
from django.forms.models import inlineformset_factory


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ["name", "description", "price", "stock"]


class ProductImageForm(forms.ModelForm):
    class Meta:
        model = ProductImage
        fields = ["image"]


ProductImageFormSet = inlineformset_factory(
    Product, ProductImage, form=ProductImageForm, extra=5, can_delete=True
)
