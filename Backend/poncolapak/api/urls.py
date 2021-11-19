from django.conf.urls import include, url
from django.urls import include, path
from . import views

urlpatterns = [
  #path('welcome', views.welcome),
  path('product/allProducts', views.all_Products),
  path('product/getProducts', views.get_Products),
  path('product/addProduct', views.add_Product),
  path('product/updateProduct/<int:Product_id>', views.update_Product),
  path('product/deleteProduct/<int:Product_id>', views.delete_Product),
]