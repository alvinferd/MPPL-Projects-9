from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from django_filters.rest_framework import DjangoFilterBackend
from rest_auth.registration.views import RegisterView
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.filters import *
import django_filters.rest_framework
from rest_framework import generics
from rest_framework import status
from .serializers import *
from .models import *
import json


def searchProducts(request, *args, **kwargs):
    queryset = Product.objects.all()
    keywords = request.GET.get('search')
    if keywords:
        queryset = queryset.filter(title__in=keywords.split(','))
        serializer =  ProductSerializer(queryset, many=True)
    return JsonResponse({'Products': serializer.data}, safe=False, status=status.HTTP_200_OK)


# Test endpoint for authentication
@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])  
def welcome(request):
    content = {"message": "Welcome to the ProductStore!"}
    return JsonResponse(content)

def all_Products(request):
    req = request.body
    Products = Product.objects
    serializer = ProductSerializer(Products, many=True)
    return JsonResponse({'Products': serializer.data}, safe=False, status=status.HTTP_200_OK)

def detail_Product(request, Product_id):
    Products = Product.objects.filter(id=Product_id)
    serializer = ProductSerializer(Products, many=True)
    return JsonResponse({'Products': serializer.data}, safe=False, status=status.HTTP_200_OK)


@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def get_Products(request):
    user = request.user.id
    Products = Product.objects.filter(added_by=user)
    serializer = ProductSerializer(Products, many=True)
    return JsonResponse({'Products': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def add_Product(request, *args, **kwargs):
    parser_classes = (MultiPartParser, FormParser)
    request.data['added_by'] = request.user.id
    product_serializer = ProductSerializer(data=request.data)
    if product_serializer.is_valid():
      product_serializer.save()
      return Response(product_serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

@api_view(["PUT"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def update_Product(request, Product_id):
    user = request.user.id
    datas = request.data
    payload = {}
    for i in datas:
        payload[i] = request.data[i]
    #print(payload)
    Product_item = Product.objects.filter(added_by=user, id=Product_id)
    if(Product_item):
        try:
            Product_item = Product.objects.filter(added_by=user, id=Product_id)
            # returns 1 or 0
            Product_item.update(**payload)
            Products = Product.objects.get(id=Product_id)
            serializer = ProductSerializer(Products)
            return JsonResponse({'Product': serializer.data}, safe=False, status=status.HTTP_200_OK)
        except ObjectDoesNotExist as e:
            return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
        except Exception:
            return JsonResponse({'error': 'Something terrible went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return JsonResponse({'error': 'You have no authority'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)        

@api_view(["DELETE"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def delete_Product(request, Product_id):
    user = request.user.id
    Product_item = Product.objects.filter(added_by=user, id=Product_id)
    if(Product_item):
        try:
            Products = Product.objects.get(added_by=user, id=Product_id)
            Products.delete()
            return JsonResponse({'Status': "Successfuly Deleted"}, safe=False, status=status.HTTP_200_OK)
        except ObjectDoesNotExist as e:
            return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
        except Exception:
            return JsonResponse({'error': 'Something went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return JsonResponse({'error': 'You have no authority'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)           
