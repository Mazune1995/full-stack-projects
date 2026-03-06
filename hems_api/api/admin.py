from django.contrib import admin
from .models import (
    Category,
    Vendor,
    Currency,
    Product,
    Inventory,
    Customer,
    Invoice,
    InvoiceItem,
    Receipt
)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):

    list_display = ('id', 'name')


@admin.register(Vendor)
class VendorAdmin(admin.ModelAdmin):

    list_display = ('id', 'name', 'contact')


@admin.register(Currency)
class CurrencyAdmin(admin.ModelAdmin):

    list_display = ('id', 'name', 'symbol')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'name',
        'brand',
        'manufacturer',
        'category',
        'vendor',
        'quantity',
        'price'
    )

    list_filter = (
        'category',
        'brand',
        'vendor'
    )

    search_fields = (
        'name',
        'brand',
        'manufacturer'
    )


@admin.register(Inventory)
class InventoryAdmin(admin.ModelAdmin):

    list_display = ('id', 'product', 'quantity')


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):

    list_display = ('id', 'name', 'phone')


@admin.register(Invoice)
class InvoiceAdmin(admin.ModelAdmin):

    list_display = ('id', 'customer', 'date', 'total')


@admin.register(InvoiceItem)
class InvoiceItemAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'invoice',
        'product',
        'quantity',
        'price'
    )


@admin.register(Receipt)
class ReceiptAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'invoice',
        'amount_paid',
        'date'
    )