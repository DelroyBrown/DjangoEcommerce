# Ecommerce_cart\models.py
from django.db import models
from django.conf import settings
from Ecommerce_products.models import Product
from django.utils import timezone


class ShippingOption(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} - £{self.price}"


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    shipping_address = models.TextField(default="")
    shipping_option = models.ForeignKey(
        ShippingOption, null=True, blank=True, on_delete=models.CASCADE
    )
    stripe_payment_intent_id = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"Order #{self.id} by {self.user.username}"

    def get_order_items(self):
        return self.orderitem_set.all()


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="order_items"
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} of {self.product.name} in Order {self.order.id}"


class Cart(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="cart"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    shipping_option = models.ForeignKey(
        ShippingOption, null=True, blank=True, on_delete=models.CASCADE
    )

    def __str__(self):
        return f"Card of {self.user.username}"

    def get_total_price(self):
        return sum(item.get_total_price() for item in self.items.all()) + (
            self.shipping_option.price if self.shipping_option else 0
        )


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def get_total_price(self):
        return self.quantity * self.product.price

    def __str__(self):
        return f"{self.quantity} of {self.product.name}"
