from django.conf.urls import include, url
from django.urls import include, path
from . import viewsProduct , viewsCategory, viewsUser

urlpatterns = [
  #path('welcome', views.welcome),
  path('product/allProducts', viewsProduct.all_Products),
  path('product/searchProducts', viewsProduct.searchProducts),  
  path('product/getProducts', viewsProduct.get_Products),
  path('product/detailProduct/<int:Product_id>', viewsProduct.detail_Product),
  path('product/addProduct', viewsProduct.add_Product),
  path('product/updateProduct/<int:Product_id>', viewsProduct.update_Product),
  path('product/deleteProduct/<int:Product_id>', viewsProduct.delete_Product),
  path('product/categoryProduct/<int:Product_id>', viewsProduct.category_Product),
  path('product/allNoWisata', viewsProduct.noWisata_Product),


  path('category/allCategorys', viewsCategory.all_Categorys),
  path('category/searchCategorys', viewsCategory.searchCategorys),  
  path('category/detailCategory/<int:Category_id>', viewsCategory.detail_Category),
  path('category/addCategory', viewsCategory.add_Category),
  path('category/updateCategory/<int:Category_id>', viewsCategory.update_Category),
  path('category/deleteCategory/<int:Category_id>', viewsCategory.delete_Category),

  path('addCustomer', viewsUser.add_Customer),
  path('addSeller', viewsUser.add_Seller),
  path('allUser', viewsUser.all_Users),
  path('detailCustomer', viewsUser.detail_Customer),
  path('detailSeller', viewsUser.detail_Seller),
]
