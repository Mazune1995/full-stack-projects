from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Vendor(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='vendors/', blank=True, null=True)

    def __str__(self):
        return self.name


class Currency(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Product(models.Model):

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)

    name = models.CharField(max_length=255)

    image = models.ImageField(upload_to='products/', blank=True, null=True)

    brand = models.CharField(max_length=100, blank=True)
    manufacturer = models.CharField(max_length=200, blank=True)

    model_number = models.CharField(max_length=100, blank=True)
    serial_number = models.CharField(max_length=100, blank=True)

    country_of_origin = models.CharField(max_length=100, blank=True)
    year_of_make = models.IntegerField(null=True, blank=True)

    purchase_date = models.DateField(null=True, blank=True)
    expiry_date = models.DateField(null=True, blank=True)

    price = models.DecimalField(max_digits=12, decimal_places=2)

    currency = models.ForeignKey(Currency, on_delete=models.SET_NULL, null=True)

    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.name
    from django.db import models


class Inventory(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    location = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.product} - {self.quantity}"