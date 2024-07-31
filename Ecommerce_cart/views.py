# Ecommerce_cart\views.py
import stripe
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.urls import reverse
from django.conf import settings
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
    context = {
        "cart": cart,
        "stripe_public_key": settings.STRIPE_PUBLIC_KEY,
    }
    return render(request, "cart/cart_detail.html", context)


@login_required
def remove_from_cart(request, item_id):
    cart_item = get_object_or_404(CartItem, id=item_id, cart__user=request.user)
    cart_item.delete()
    return redirect("Ecommerce_cart:view_cart")


def login_or_register(request):
    return render(request, "users/registration/login_or_register.html")


# PAYMENTS SECTION

stripe.api_key = settings.STRIPE_SECRET_KEY


@login_required
def create_checkout_session(request):
    cart = Cart.objects.get(user=request.user)
    line_items = []
    for item in cart.items.all():
        line_items.append(
            {
                "price_data": {
                    "currency": "usd",
                    "product_data": {
                        "name": item.product.name,
                    },
                    "unit_amount": int(item.product.price * 100),
                },
                "quantity": item.quantity,
            }
        )

    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        line_items=line_items,
        mode="payment",
        success_url=request.build_absolute_uri(
            reverse("Ecommerce_cart:payment_success")
        ),
        cancel_url=request.build_absolute_uri(reverse("Ecommerce_cart:payment_cancel")),
    )

    return JsonResponse({"id": session.id})


@login_required
def payment_success(request):
    cart = Cart.objects.get(user=request.user)
    cart.items.all().delete()
    return render(request, "cart/payment_success.html")


@login_required
def payment_cancel(request):
    return render(request, "cart/payment_cancel.html")
