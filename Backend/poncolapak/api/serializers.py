from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'created_date', 'added_by', 'harga', 'stock', 'terjual', 'rating', 'category', 'image']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title']