from django.conf.urls import url, include

from .views import UserDetailAPIView

urlpatterns = [
  url(r'^(?P<username>\w+)/$', UserDetailAPIView.as_view(), name='detail'),
]
