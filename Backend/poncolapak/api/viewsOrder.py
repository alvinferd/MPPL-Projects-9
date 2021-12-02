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

@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def makeOrder(request, *args, **kwargs):
    user = request.user.id
    #list Produk
    Carts = Cart.objects.filter(user=user, checkout=True)
    serializer = CartSerializer(Carts, many=True)
    totalHarga = 0
    for i in serializer.data:
        totalHarga += i["totalPrice"]
    #make Order
    request.data['user'] = user
    request.data['totalHarga'] = totalHarga
    parser_classes = (MultiPartParser, FormParser)
    order_serializer = OrderSerializer(data=request.data)
    if order_serializer.is_valid():
      order_serializer.save()
    #save each pesanan to order item
    hasil = []
    Carts = Cart.objects.filter(user=user, checkout=True)
    serializer = CartSerializer(Carts, many=True)
    for i in serializer.data:
        req = i
        req.pop("id")
        pemiliknya = Seller.objects.filter(namaToko=req["namaToko"])
        serializerUser = SellerSerializer(pemiliknya, many=True)
        penjual = serializerUser.data[0]['user']
        req["seller"] = penjual
        req["orderid"] = order_serializer.data["id"]
        req["status"] = 1
        orderitem_serializer = OrderItemSerializer(data=req)
        hasil.append(req)
        if orderitem_serializer.is_valid():
            orderitem_serializer.save()
    Carts.delete()
    return JsonResponse({'Order': order_serializer.data, "OrderItem":hasil}, safe=False, status=status.HTTP_200_OK)

@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def allUserOrder(request, *args, **kwargs):
    user = request.user.id
    Orders = Order.objects.filter(user=user)
    serializer = OrderSerializer(Orders, many=True)
    return JsonResponse({'Orders': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def allUserOrderItem(request, *args, **kwargs):
    user = request.user.id
    Orders = OrderItem.objects.filter(user=user)
    serializer = OrderItemSerializer(Orders, many=True)
    return JsonResponse({'OrderItems': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def allSellerOrderItem(request, *args, **kwargs):
    user = request.user.id
    Orders = OrderItem.objects.filter(seller=user)
    serializer = OrderItemSerializer(Orders, many=True)
    return JsonResponse({'OrderItems': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def allUserOrderItemPerOrder(request, Order_id, *args, **kwargs):
    user = request.user.id
    Orders = OrderItem.objects.filter(user=user, orderid=Order_id)
    serializer = OrderItemSerializer(Orders, many=True)
    return JsonResponse({'OrderItems': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def allUserOrderItemPerStatus(request, Status_id, *args, **kwargs):
    user = request.user.id
    Orders = OrderItem.objects.filter(user=user, status=Status_id)
    serializer = OrderItemSerializer(Orders, many=True)
    return JsonResponse({'OrderItems': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["PUT"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def UpdateOrderItemStatus(request, OrderItemid, *args, **kwargs):
    Orders = OrderItem.objects.filter(id=OrderItemid)
    payload = {"status":request.data["status"]}
    Orders.update(**payload)
    Orders = OrderItem.objects.filter(id=OrderItemid)
    serializer = OrderItemSerializer(Orders, many=True)
    return JsonResponse({'OrderItems': serializer.data}, safe=False, status=status.HTTP_200_OK)
