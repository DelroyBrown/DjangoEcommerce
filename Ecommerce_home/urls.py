from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = "Ecommerce_home"

urlpatterns = [
    path("", views.home, name="home"),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
