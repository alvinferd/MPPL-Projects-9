from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.utils import timezone
import random, os, string

def productFile(instance, filename):
    return '/'.join( ['products', ('').join(random.choices(string.ascii_uppercase + string.digits, k=5)) , filename] )

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    namaLengkap = models.CharField(max_length=100)
    ttl = models.DateField( blank=True, null=True)
    gender = models.CharField(max_length=20, blank=True, null=True)
    handphone = models.IntegerField( blank=True, null=True)
    fotoProfile = models.ImageField( upload_to=productFile, blank=True, null=True)

    def __str__(self):
      return self.namaLengkap

class Seller(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    namaToko = models.CharField(max_length=100)
    DeskripsiToko = models.CharField(max_length=100, blank=True, null=True)
    fotoProfile = models.ImageField( upload_to=productFile, blank=True, null=True)

    def __str__(self):
     return self.namaToko

class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=300)  

    def __str__(self):
        return self.title

class Product(models.Model):
  title = models.CharField(max_length=200)
  description = models.CharField(max_length=300)  
  added_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  harga = models.IntegerField(blank=True, null=True)
  stock = models.IntegerField(blank=True, null=True)
  terjual = models.IntegerField(blank=True, null=True)
  rating = models.FloatField(blank=True, null=True)
  category = models.ForeignKey(Category,  on_delete=models.CASCADE, blank=True, null=True)
  image = models.ImageField( upload_to=productFile)
  image2 = models.ImageField( upload_to=productFile, blank=True, null=True)
  image3 = models.ImageField( upload_to=productFile, blank=True, null=True)
  image4 = models.ImageField( upload_to=productFile, blank=True, null=True)
  image5 = models.ImageField( upload_to=productFile, blank=True, null=True)
  created_date = models.DateTimeField(default=timezone.now)

  def __str__(self):
    return self.title

class Cart(models.Model):
    user = models.ForeignKey(Customer, on_delete=models.CASCADE)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    userid = models.IntegerField(null=True)
    quantity = models.IntegerField(null=False)
    totalPrice = models.IntegerField( blank=True, null=True)
    checkout = models.BooleanField(default = 0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {} - {}".format(self.user,
                                               self.item,
                                               self.quantity)
