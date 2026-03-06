from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet, VendorViewSet, CurrencyViewSet

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)
router.register('vendors', VendorViewSet)
router.register('currencies', CurrencyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]