from django.urls import path
from .views import *

urlpatterns = [
    path('book/',Book),
    path('book/create',BookCreate),
    path('book/detail/<int:bk_id>/',BookDetail)
]