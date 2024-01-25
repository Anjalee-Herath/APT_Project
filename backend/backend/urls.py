from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.urls import path,re_path
from django.urls import re_path as url
from django.conf.urls.static import static
from property import views

from property.views import PropertyView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("", PropertyView, basename='propertyview')

urlpatterns = [
    re_path(r'^property$',views.propertiesApi),
    re_path(r'^property/([a-zA-Z0-9]+)$',views.propertiesApi),
    re_path(r'^users$',views.usersApi),
    re_path(r'^users/([a-zA-Z0-9]+)$',views.usersApi),
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
