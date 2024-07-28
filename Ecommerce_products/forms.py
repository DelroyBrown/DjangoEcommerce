# Ecommerce_products\forms.py
from django import forms
from .models import Product, ProductImage, Category, Review
from django.forms.models import inlineformset_factory


class ProductFilterForm(forms.Form):
    q = forms.CharField(max_length=100, required=False, label="Search")
    category = forms.ModelChoiceField(
        queryset=Category.objects.all(), required=False, label="Category"
    )


class ProductForm(forms.ModelForm):
    new_category = forms.CharField(
        max_length=100,
        required=False,
        help_text="Enter a new category if it doesn't exist.",
    )

    class Meta:
        model = Product
        fields = ["name", "description", "price", "stock", "category"]

    def clean(self):
        cleaned_data = super().clean()
        category_name = cleaned_data.get("new_category")
        category = cleaned_data.get("category")

        if category_name and category:
            raise forms.ValidationError(
                "Please either select an existing category or enter a new category, not both."
            )

        if category_name:
            category, created = Category.objects.get_or_create(name=category_name)
            cleaned_data["category"] = category
        elif not category:
            raise forms.ValidationError(
                "You must select a category or enter a new one."
            )

        return cleaned_data


class ProductImageForm(forms.ModelForm):
    class Meta:
        model = ProductImage
        fields = ["image"]


ProductImageFormSet = inlineformset_factory(
    Product, ProductImage, form=ProductImageForm, extra=5, can_delete=True
)


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ["name", "email", "review", "rating"]
