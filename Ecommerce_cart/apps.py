from django.apps import AppConfig


class EcommerceCartConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "Ecommerce_cart"

    def ready(self):
        import Ecommerce_cart.templatetags.cart_extras
