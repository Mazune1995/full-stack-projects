from django.urls import path
from .views import category_list, product_list

urlpatterns = [
    path('categories/', category_list, name='category-list'),
    path('products/', product_list, name='product-list'),
]