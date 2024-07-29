# Ecommerce_users\views.py
from django.contrib.auth.views import (
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView,
)
from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login, logout
from django.contrib.auth.forms import AuthenticationForm, PasswordResetForm
from django.contrib.auth.decorators import login_required
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
from .forms import CustomUserCreationForm
from .models import CustomUser


@login_required
def logout_confirmation(request):
    return render(request, "users/registration/logout_confirmation.html")


@login_required
def logout_view(request):
    logout(request)
    return redirect("Ecommerce_users:login")


def login_view(request):
    next_url = request.GET.get("next", "")
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            auth_login(request, user)
            if next_url:
                return redirect(next_url)
            return redirect("Ecommerce_users:profile")
    else:
        form = AuthenticationForm()
    return render(
        request, "users/registration/login.html", {"form": form, "next": next_url}
    )


def password_reset_request(request):
    if request.method == "POST":
        form = PasswordResetForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data["email"]
            users = CustomUser.objects.filter(email=email)
            for user in users:
                subject = "Password Reset Requested"
                email_template_name = "users/registration/password_reset_email.txt"
                context = {
                    "email": user.email,
                    "domain": get_current_site(request).domain,
                    "site_name": "E-commerce Site",
                    "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                    "user": user,
                    "token": default_token_generator.make_token(user),
                    "protocol": "http",
                }
                email_message = render_to_string(email_template_name, context)
                send_mail(subject, email_message, None, [user.email])
            return redirect("Ecommerce_users:password_reset_done")
    else:
        form = PasswordResetForm()
    return render(request, "users/registration/password_reset.html", {"form": form})


def register(request):
    next_url = request.GET.get("next", "")
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            auth_login(request, user)
            if next_url:
                return redirect(next_url)
            return redirect("Ecommerce_users:profile")
    else:
        form = CustomUserCreationForm()
    return render(
        request, "users/registration/register.html", {"form": form, "next": next_url}
    )


class CustomPasswordResetDoneView(PasswordResetDoneView):
    template_name = "users/registration/password_reset_done.html"


class CustomPasswordResetConfirmView(PasswordResetConfirmView):
    template_name = "users/registration/password_reset_confirm.html"


class CustomPasswordResetCompleteView(PasswordResetCompleteView):
    template_name = "users/registration/password_reset_complete.html"
