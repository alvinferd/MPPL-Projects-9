from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from django_filters.rest_framework import DjangoFilterBackend
from rest_auth.registration.views import RegisterView
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.filters import *
import django_filters.rest_framework
from rest_framework import generics
from rest_framework import status
from .serializers import *
from .models import *
import json

@api_view(["POST"])
def add_Customer(request, *args, **kwargs):
    parser_classes = (MultiPartParser, FormParser)
    user_serializer = UserSerializer(data=request.data)
    if user_serializer.is_valid() and request.data["namaLengkap"]:
        user_serializer.save()

        Users = User.objects.filter(username=request.data["username"]) 
        serializer = UserSerializer(Users, many=True)
        request.data._mutable = True
        request.data["user"] = serializer.data[0]["id"]
        request.data._mutable = False
        cust_serializer = CustomerSerializer(data=request.data)
        if cust_serializer.is_valid():
            cust_serializer.save()
            return Response(cust_serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

@api_view(["POST"])
def add_Seller(request, *args, **kwargs):
    parser_classes = (MultiPartParser, FormParser)
    user_serializer = UserSerializer(data=request.data)
    if user_serializer.is_valid() and request.data["namaToko"]:
        user_serializer.save()

        Users = User.objects.filter(username=request.data["username"]) 
        serializer = UserSerializer(Users, many=True)
        request.data._mutable = True
        request.data["user"] = serializer.data[0]["id"]
        request.data._mutable = False
        seller_serializer = SellerSerializer(data=request.data)
        if seller_serializer.is_valid():
            seller_serializer.save()
            return Response(seller_serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)    


def all_Users(request):
    Users = User.objects.exclude(is_active=0)
    serializer = UserSerializer(Users, many=True)
    return JsonResponse({'Users': serializer.data}, safe=False, status=status.HTTP_200_OK)

def detail_Customer(request):
    userid = request.user.id
    Customers = Customer.objects.filter(user=userid)
    serializer = CustomerSerializer(Customers, many=True)
    return JsonResponse({'Profile': serializer.data}, safe=False, status=status.HTTP_200_OK)

def detail_Seller(request):
    userid = request.user.id
    Customers = Seller.objects.filter(user=userid)
    serializer = SellerSerializer(Customers, many=True)
    return JsonResponse({'Profile': serializer.data}, safe=False, status=status.HTTP_200_OK)
