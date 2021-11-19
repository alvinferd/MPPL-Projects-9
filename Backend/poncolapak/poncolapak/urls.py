from django.contrib import admin
from django.urls import path, include
from django.conf.urls import include, url
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
	path('api/v1/', include('api.urls')),
	url(r'^rest-auth/', include('rest_auth.urls')),
	url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
	url(r'^products/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT,})
]
