from django.contrib import admin
from .models import Category, Currency, Vendor, Product, Inventory

admin.site.register(Category)
admin.site.register(Currency)
admin.site.register(Vendor)
admin.site.register(Product)
admin.site.register(Inventory)