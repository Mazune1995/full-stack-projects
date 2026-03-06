from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Vendor(models.Model):
    name = models.CharField(max_length=200)
    contact = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name


class Currency(models.Model):
    name = models.CharField(max_length=20)
    symbol = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Product(models.Model):

    name = models.CharField(max_length=200)

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE
    )

    vendor = models.ForeignKey(
        Vendor,
        on_delete=models.CASCADE
    )

    brand = models.CharField(
        max_length=200,
        blank=True,
        null=True
    )

    manufacturer = models.CharField(
        max_length=200,
        blank=True,
        null=True
    )

    currency = models.ForeignKey(
        Currency,
        on_delete=models.CASCADE
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    quantity = models.IntegerField(
        default=0
    )

    def __str__(self):
        return self.name


class Inventory(models.Model):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )

    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.product.name} - {self.quantity}"


class Customer(models.Model):

    name = models.CharField(max_length=200)

    phone = models.CharField(
        max_length=50,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name


class Invoice(models.Model):

    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE
    )

    date = models.DateField(auto_now_add=True)

    total = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0
    )

    def __str__(self):
        return f"Invoice {self.id}"


class InvoiceItem(models.Model):

    invoice = models.ForeignKey(
        Invoice,
        on_delete=models.CASCADE
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )

    quantity = models.IntegerField()

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    def save(self, *args, **kwargs):

        product = self.product

        if product.quantity < self.quantity:
            raise ValueError("Not enough stock")

        product.quantity -= self.quantity
        product.save()

        super().save(*args, **kwargs)

        items = InvoiceItem.objects.filter(invoice=self.invoice)

        total = sum(
            item.price * item.quantity
            for item in items
        )

        self.invoice.total = total
        self.invoice.save()


class Receipt(models.Model):

    invoice = models.ForeignKey(
        Invoice,
        on_delete=models.CASCADE
    )

    amount_paid = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Receipt {self.id}"