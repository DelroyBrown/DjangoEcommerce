# Ecommerce_profiles\views.py
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from Ecommerce_users.forms import CustomUserChangeForm


@login_required
def user_profile(request):
    return render(request, "profiles/profile.html", {"user": request.user})


@login_required
def edit_user_profile(request):
    if request.method == "POST":
        form = CustomUserChangeForm(request.POST, request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect("Ecommerce_users:profile")
    else:
        form = CustomUserChangeForm(instance=request.user)
    return render(request, "profiles/edit_user_profile.html", {"form": form})
