from django.contrib import admin
from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'product_id',
        'name',
        'category',
        'price',
        'currency',
        'created_at'
    )

    list_filter = ('category', 'created_at')
    search_fields = ('name', 'product_id')