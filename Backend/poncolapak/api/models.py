from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.utils import timezone

def productFile(instance, filename):
    return '/'.join( ['products', str(instance.id), filename] )

class UMKM(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  namaToko = models.CharField(max_length=100)
  fotoProfile = models.ImageField( upload_to=productFile, blank=True, null=True)

  def __str__(self):
    return self.user.username

class customer(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  namaLengkap = models.CharField(max_length=100)
  ttl = models.DateField()
  gender = models.CharField(max_length=20)
  handphone = models.IntegerField()
  fotoProfile = models.ImageField( upload_to=productFile, blank=True, null=True)

  def __str__(self):
    return self.user.username

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
  image = models.ImageField( upload_to=productFile, blank=True, null=True)
  created_date = models.DateTimeField(default=timezone.now)

  def __str__(self):
    return self.title