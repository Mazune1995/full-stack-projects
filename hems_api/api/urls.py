from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register('categories', CategoryViewSet)
router.register('vendors', VendorViewSet)
router.register('currencies', CurrencyViewSet)
router.register('products', ProductViewSet)
router.register('inventory', InventoryViewSet)

router.register('customers', CustomerViewSet)
router.register('invoices', InvoiceViewSet)
router.register('invoice-items', InvoiceItemViewSet)
router.register('receipts', ReceiptViewSet)

urlpatterns = [
    path('', include(router.urls)),
]