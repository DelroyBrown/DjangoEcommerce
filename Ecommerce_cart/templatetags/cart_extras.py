# Ecommerce_cart\templatetags\cart_extras.py
from django import template

register = template.Library()


@register.filter
def cart_total_price(cart_items):
    return sum(item.get_total_price() for item in cart_items)
