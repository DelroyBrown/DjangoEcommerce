# Ecommerce_cart\views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from .models import Cart, CartItem
from .forms import AddToCartForm
from Ecommerce_products.models import Product


# @login_required
def add_to_cart(request, product_id):
    if not request.user.is_authenticated:
        return redirect(
            f"{reverse('Ecommerce_cart:login_or_register')}?next={request.path}"
        )

    product = get_object_or_404(Product, id=product_id)
    cart, created = Cart.objects.get_or_create(user=request.user)

    if request.method == "POST":
        form = AddToCartForm(request.POST)
        if form.is_valid():
            quantity = form.cleaned_data["quantity"]
            cart_item, created = CartItem.objects.get_or_create(
                cart=cart, product=product
            )

            if created:
                cart_item.quantity = quantity
            else:
                cart_item.quantity += quantity

            cart_item.save()
            return redirect("Ecommerce_cart:view_cart")
    else:
        form = AddToCartForm()

    return render(request, "cart/add_to_cart.html", {"form": form, "product": product})


@login_required
def view_cart(request):
    cart = Cart.objects.filter(user=request.user).first()
    return render(request, "cart/cart_detail.html", {"cart": cart})


@login_required
def remove_from_cart(request, item_id):
    cart_item = get_object_or_404(CartItem, id=item_id, cart__user=request.user)
    cart_item.delete()
    return redirect("Ecommerce_cart:view_cart")


def login_or_register(request):
    return render(request, "users/registration/login_or_register.html")
