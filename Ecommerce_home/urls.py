from django.urls import path
from . import views

app_name = "Ecommerce_home"

urlpatterns = [
    path("", views.home, name="home"),
]
