# Ecommerce_users\urls.py
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from Ecommerce_profiles.views import user_profile, edit_user_profile

app_name = "Ecommerce_users"

urlpatterns = [
    path("register/", views.register, name="register"),
    path("logout/confirmation/", views.logout_confirmation, name="logout_confirmation"),
    path("logout/", views.logout_view, name="logout"),
    path("login/", views.login_view, name="login"),
    # Password reset URLs
    path("password_reset/", views.password_reset_request, name="password_reset"),
    path("password_reset/done/", views.CustomPasswordResetDoneView.as_view(), name="password_reset_done"),
    path("reset/<uidb64>/<token>/", views.CustomPasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    path("reset/done/", views.CustomPasswordResetCompleteView.as_view(), name="password_reset_complete"),
    # Profile URL kept here to keep the url as 'users/profile'
    path("profile/", user_profile, name="profile"),
    path("profile/edit/", edit_user_profile, name="edit_user_profile"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
