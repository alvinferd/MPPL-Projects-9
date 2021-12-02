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
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.decorators import authentication_classes

def all_Carts(request):
    req = request.body
    Carts = Cart.objects
    serializer = CartSerializer(Carts, many=True)
    return JsonResponse({'Carts': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_Carts_centang(request):
    user = request.user.id
    Carts = Cart.objects.filter(user=user, checkout=True)
    serializer = CartSerializer(Carts, many=True)
    totalHarga = 0
    for i in serializer.data:
        totalHarga += i["totalPrice"]
    return JsonResponse({'Carts': serializer.data, 'totalHarga': totalHarga}, safe=False, status=status.HTTP_200_OK)

@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_Carts(request):
    user = request.user.id
    Carts = Cart.objects.filter(user=user)
    serializer = CartSerializer(Carts, many=True)
    return JsonResponse({'Carts': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def add_Cart(request, *args, **kwargs):
    parser_classes = (MultiPartParser, FormParser)

    # Get produk fields
    Products = Product.objects.filter(id=request.data['item'])
    serializer = ProductSerializer(Products, many=True)
    harga = serializer.data[0]['harga']
    pemilik = serializer.data[0]['added_by']
    pemiliknya = Seller.objects.filter(user=pemilik)
    serializerUser = SellerSerializer(pemiliknya, many=True)
    toko = serializerUser.data[0]['namaToko']
    #print(serializerUser.data[0])
    #request.data._mutable = True
    request.data["namaItem"] = serializer.data[0]['title']
    request.data["namaToko"] =  toko
    request.data["imageUrl"] = serializer.data[0]['image']
    jumlah = request.data['quantity']
    request.data['totalPrice'] = int(harga)*int(jumlah)
    request.data['user'] = request.user.id
    #request.data._mutable = False

    Cart_serializer = CartSerializer(data=request.data)
    if Cart_serializer.is_valid():
      Cart_serializer.save()
      return Response(Cart_serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(Cart_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

@api_view(["PUT"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def update_quantity(request, cart_id):
    user = request.user.id
    Carts = Cart.objects.filter(user=user, id=cart_id)
    id_produk = CartSerializer(Carts, many=True).data[0]["item"]
    harga_produk = ProductSerializer(Product.objects.filter(id=id_produk), many=True).data[0]["harga"]
    payload = {"quantity": request.data["quantity"], "totalPrice": int(harga_produk)*int(request.data["quantity"])}
    Carts.update(**payload)
    CartObj = Cart.objects.get(id=cart_id)
    Cart_serializer = CartSerializer(CartObj)
    user = request.user.id
    Carts = Cart.objects.filter(user=user, checkout=True)
    serializer = CartSerializer(Carts, many=True)
    totalHarga = 0
    for i in serializer.data:
        totalHarga += i["totalPrice"]
    return  JsonResponse({'Carts': serializer.data, 'totalHarga': totalHarga}, safe=False, status=status.HTTP_200_OK)

@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def checkout_true(request,  cart_id):
    user = request.user.id
    payload = {"checkout":True}
    Carts = Cart.objects.filter(user=user, id=cart_id)
    Carts.update(**payload)
    CartObj = Cart.objects.get(id=cart_id)
    Cart_serializer = CartSerializer(CartObj)
    return Response(Cart_serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def checkout_all_false(request):
    user = request.user.id
    payload = {"checkout":False}
    Carts = Cart.objects.filter(user=user)
    Carts.update(**payload)
    Carts = Cart.objects.filter(user=user)
    Cart_serializers = CartSerializer(Carts, many=True)
    return Response(Cart_serializers.data, status=status.HTTP_200_OK)


@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def checkout_all_true(request):
    user = request.user.id
    payload = {"checkout":True}
    Carts = Cart.objects.filter(user=user)
    Carts.update(**payload)
    Carts = Cart.objects.filter(user=user)
    Cart_serializers = CartSerializer(Carts, many=True)
    return Response(Cart_serializers.data, status=status.HTTP_200_OK)

@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def checkout_false(request,  cart_id):
    user = request.user.id
    payload = {"checkout":False}
    Carts = Cart.objects.filter(user=user, id=cart_id)
    Carts.update(**payload)
    CartObj = Cart.objects.get(id=cart_id)
    Cart_serializer = CartSerializer(CartObj)
    return Response(Cart_serializer.data, status=status.HTTP_200_OK)

@api_view(["DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def delete_Cart(request, Cart_id):
    user = request.user.id
    Cart_item = Cart.objects.filter(user=user, id=Cart_id)
    if(Cart_item):
        try:
            Carts = Cart.objects.get(user=user, id=Cart_id)
            Carts.delete()
            return JsonResponse({'Status': "Successfuly Deleted"}, safe=False, status=status.HTTP_200_OK)
        except ObjectDoesNotExist as e:
            return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
        except Exception:
            return JsonResponse({'error': 'Something went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return JsonResponse({'error': 'You have no authority or no item found'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)           

