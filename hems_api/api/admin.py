from django.contrib import admin
from .models import Category, Product, Vendor, Currency


admin.site.register(Category)
admin.site.register(Vendor)
admin.site.register(Currency)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "category",
        "brand",
        "manufacturer",
        "price",
        "currency",
        "quantity"
    )

    search_fields = ("name", "brand", "manufacturer")

    list_filter = ("category", "brand", "currency")