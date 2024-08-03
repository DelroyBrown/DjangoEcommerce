from django.contrib import admin
from .models import ShippingOption, CartItem, Cart, Order, OrderItem

admin.site.register(ShippingOption)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(CartItem)
admin.site.register(Cart)
