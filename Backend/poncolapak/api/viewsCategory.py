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


def searchCategorys(request, *args, **kwargs):
    queryset = Category.objects.all()
    keywords = request.GET.get('search')
    if keywords:
        queryset = queryset.filter(title__in=keywords.split(','))
        serializer =  CategorySerializer(queryset, many=True)
    return JsonResponse({'Categories': serializer.data}, safe=False, status=status.HTTP_200_OK)

def all_Categorys(request):
    req = request.body
    Categorys = Category.objects
    serializer = CategorySerializer(Categorys, many=True)
    return JsonResponse({'Categorys': serializer.data}, safe=False, status=status.HTTP_200_OK)

def detail_Category(request, Category_id):
    Categorys = Category.objects.filter(id=Category_id)
    serializer = CategorySerializer(Categorys, many=True)
    return JsonResponse({'Categorys': serializer.data}, safe=False, status=status.HTTP_200_OK)


@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def add_Category(request, *args, **kwargs):
    user = request.user.id
    if(user != 1):
        return JsonResponse({'error': "You are not admin"}, safe=False, status=HTTP_403_FORBIDDEN)
    else:
        parser_classes = (MultiPartParser, FormParser)
        Category_serializer = CategorySerializer(data=request.data)
        if Category_serializer.is_valid():
          Category_serializer.save()
          return Response(Category_serializer.data, status=status.HTTP_201_CREATED)
        else:
          return Response(Category_serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
    
@api_view(["PUT"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def update_Category(request, Category_id):
    datas = request.data
    payload = {}
    for i in datas:
        payload[i] = request.data[i]
    user = request.user.id
    if(user != 1):
        return JsonResponse({'error': "You are not admin"}, safe=False, status=HTTP_403_FORBIDDEN)
    else:
        try:
            Category_item = Category.objects.filter(id=Category_id)
            # returns 1 or 0
            Category_item.update(**payload)
            Categorys = Category.objects.get(id=Category_id)
            serializer = CategorySerializer(Categorys)
            return JsonResponse({'Category': serializer.data}, safe=False, status=status.HTTP_200_OK)
        except ObjectDoesNotExist as e:
            return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
        except Exception:
            return JsonResponse({'error': 'Something terrible went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["DELETE"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def delete_Category(request, Category_id):
    user = request.user.id
    if(user != 1):
        return JsonResponse({'error': "You are not admin"}, safe=False, status=HTTP_403_FORBIDDEN)
    else:
        try:
            Categorys = Category.objects.get(id=Category_id)
            Categorys.delete()
            return JsonResponse({'Status': "Successfuly Deleted"}, safe=False, status=status.HTTP_200_OK)
        except ObjectDoesNotExist as e:
            return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
        except Exception:
            return JsonResponse({'error': 'Something went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)