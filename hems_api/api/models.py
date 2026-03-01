from django.db import models


# ------------------------
# CATEGORY MODEL
# ------------------------
class Category(models.Model):
    CATEGORY_CHOICES = [
        ("ICU & NICU", "ICU & NICU"),
        ("Emergency", "Emergency"),
        ("Radiography", "Radiography"),
        ("Diagnostic", "Diagnostic"),
        ("Hospital Furniture", "Hospital Furniture"),
    ]

    name = models.CharField(max_length=100, choices=CATEGORY_CHOICES, unique=True)

    def __str__(self):
        return self.name


# ------------------------
# CURRENCY MODEL
# ------------------------
class Currency(models.Model):
    CURRENCY_CHOICES = [
        ("UGX", "UGX"),
        ("USD", "USD"),
        ("EURO", "EURO"),
    ]

    code = models.CharField(max_length=10, choices=CURRENCY_CHOICES, unique=True)

    def __str__(self):
        return self.code


# ------------------------
# VENDOR MODEL
# ------------------------
class Vendor(models.Model):
    name = models.CharField(max_length=200)
    contact_person = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=50, blank=True)
    email = models.EmailField(blank=True)
    address = models.TextField(blank=True)

    def __str__(self):
        return self.name


# ------------------------
# PRODUCT MODEL
# ------------------------
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    currency = models.ForeignKey(Currency, on_delete=models.SET_NULL, null=True)

    price = models.DecimalField(max_digits=12, decimal_places=2)

    # ✅ ADD THIS
    image = models.ImageField(upload_to="products/", blank=True, null=True)

    def __str__(self):
        return self.name


# ------------------------
# INVENTORY MODEL
# ------------------------
class Inventory(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE, related_name="inventory")
    quantity = models.PositiveIntegerField(default=0)
    reorder_level = models.PositiveIntegerField(default=5)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.product.name} Stock"