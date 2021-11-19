from rest_auth.registration.views import RegisterView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
from .serializers import *
from .models import *
import json


@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])  
def welcome(request):
    content = {"message": "Welcome to the ProductStore!"}
    return JsonResponse(content)

def all_Products(request):
    Products = Product.objects
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
def add_Product(request):
    try:
        req = request.body
        payload = json.loads(request.body)
        user = request.user
        Products = Product.objects.create(
            title=payload["title"],
            description=payload["description"],
            added_by=user,
            harga=payload["harga"],
            stock=payload["stock"],
            terjual=payload["terjual"],
            rating=payload["rating"],
            category=Category.objects.get(id=payload["category"]),
            image= request.data['image'],
        )
        serializer = ProductSerializer(Products)
        return JsonResponse({'Products': serializer.data}, safe=False, status=status.HTTP_201_CREATED)
    except ObjectDoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
    except Exception:
        return JsonResponse({'error': 'Something terrible went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["DELETE"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def delete_Product(request, Product_id):
    user = request.user.id
    try:
        Products = Product.objects.get(added_by=user, id=Product_id)
        Products.delete()
        return JsonResponse({'Status': "Successfuly Deleted"}, safe=False, status=status.HTTP_200_OK)
    except ObjectDoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
    except Exception:
        return JsonResponse({'error': 'Something went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


 
@api_view(["PUT"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def update_Product(request, Product_id):
    user = request.user.id
    payload = json.loads(request.body)
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