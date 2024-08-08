# Ecommerce_cart\views.py
import stripe
import json
import qrcode
import logging
from io import BytesIO
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.urls import reverse
from django.conf import settings
from .models import Cart, CartItem, ShippingOption, Order, OrderItem
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
    shipping_options = ShippingOption.objects.all()
    context = {
        "cart": cart,
        "stripe_public_key": settings.STRIPE_PUBLIC_KEY,
        "shipping_options": shipping_options,
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

    if cart.shipping_option:
        line_items.append(
            {
                "price_data": {
                    "currency": "usd",
                    "product_data": {
                        "name": "Shipping",
                    },
                    "unit_amount": int(cart.shipping_option.price * 100),
                },
                "quantity": 1,
            }
        )

    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        line_items=line_items,
        mode="payment",
        shipping_address_collection={"allowed_countries": ["US", "GB"]},
        success_url=request.build_absolute_uri(
            reverse("Ecommerce_cart:payment_success")
        )
        + "?session_id={CHECKOUT_SESSION_ID}",
        cancel_url=request.build_absolute_uri(reverse("Ecommerce_cart:payment_cancel")),
    )

    return JsonResponse({"id": session.id})


logger = logging.getLogger("Ecommerce_cart")


@login_required
def payment_success(request):
    session_id = request.GET.get("session_id")
    if not session_id:
        return redirect("Ecommerce_cart:view_cart")

    session = stripe.checkout.Session.retrieve(session_id)

    cart = Cart.objects.get(user=request.user)

    order = Order.objects.create(
        user=request.user,
        total_amount=cart.get_total_price(),
        shipping_address=session["customer_details"]["address"],
        shipping_option=cart.shipping_option,
        stripe_payment_intent_id=session.payment_intent,
    )

    for item in cart.items.all():
        OrderItem.objects.create(
            order=order,
            product=item.product,
            quantity=item.quantity,
            price=item.product.price,
        )

    qr_url = request.build_absolute_uri(
        reverse("Ecommerce_cart:museum_entry", args=[order.id])
    )
    qr = qrcode.make(qr_url)

    # Instantiate BytesIO
    qr_bytes = BytesIO()
    qr.save(qr_bytes, format="PNG")
    qr_bytes.seek(0)

    email_subject = "Your Museum Entry QR Code"
    email_body = render_to_string(
        "cart/emails/museum_entry.html", {"order": order, "qr_url": qr_url}
    )
    email = EmailMessage(
        email_subject,
        email_body,
        settings.DEFAULT_FROM_EMAIL,
        [request.user.email],
    )
    email.attach("qr_code.png", qr_bytes.getvalue(), "image/png")
    email.content_subtype = "html"

    try:
        email.send()
        logger.info("Email sent successfully to %s", request.user.email)
    except Exception as e:
        logger.error("Error sending email: %s", e)

    cart.items.all().delete()

    return render(request, "cart/payment_success.html", {"order": order})


@login_required
def museum_entry(request, order_id):
    order = get_object_or_404(Order, id=order_id, user=request.user)
    order_items = order.order_items.all()
    context = {"order": order, "order_items": order_items}
    return render(request, "cart/museum_entry.html", context)


@login_required
def payment_cancel(request):
    return render(request, "cart/payment_cancel.html")


def update_shipping_option(request):
    if request.method == "POST":
        data = json.loads(request.body)
        shipping_option_id = data.get("shipping_option")
        cart = Cart.objects.get(user=request.user)
        cart.shipping_option = ShippingOption.objects.get(id=shipping_option_id)
        cart.save()
        return JsonResponse({"status": "success"})
    return JsonResponse({"status": "error"}, status=400)


@login_required
def order_history(request):
    orders = Order.objects.filter(user=request.user).order_by("-created_at")
    return render(request, "cart/order_history.html", {"orders": orders})


@login_required
def order_detail(request, order_id):
    order = get_object_or_404(Order, id=order_id, user=request.user)
    order_items = order.order_items.all()
    context = {
        "order": order,
        "order_items": order_items,
    }
    return render(request, "cart/order_detail.html", context)
