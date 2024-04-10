from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('categories/', views.CategoryList.as_view(), name='category_list'),
    path('categories/<int:pk>', views.CategoryDetail.as_view(), name='category_detail'),

    path('subcategories/', views.SubcategoryList.as_view(), name="subcategory_list"),
    path('subcategories/<int:pk>', views.SubcategoryDetail.as_view(), name="subcategory_detail"),

    path('products/', views.ProductList.as_view(), name="product_list"),
    path('products/<int:pk>', views.ProductDetail.as_view(), name="product_detail"),

    path('inventoryadjustments/', views.InventoryAdjustmentList.as_view(), name="inventory_adjustment_list"),
    path('inventoryadjustments/<int:pk>', views.InventoryAdjustmentDetail.as_view(), name="inventory_adjustment_detail"),

    path('warehouseinventoryproducts/', views.WarehouseInventoryProductList.as_view(), name='warehouse_inventory_product_list'),
    path('warehouseinventoryproducts/<int:pk>', views.WarehouseInventoryProductDetail.as_view(), name='warehouse_inventory_product_detail'),

    path('storediscounts/', views.StoreDiscountList.as_view(), name="store_discount_list"),
    path('storediscounts/<int:pk>', views.StoreDiscountDetail.as_view(), name="store_discount_detail"),

    path('stores/', views.StoreList.as_view(), name="store_list"),
    path('stores/<int:pk>', views.StoreDetail.as_view(), name="store_detail"),

    path('storeinventoryproducts/', views.StoreInventoryProductList.as_view(), name="store_inventory_product_list"),
    path('storeinventoryproducts/<int:pk>', views.StoreInventoryProductDetail.as_view(), name="store_inventory_product_detail"),

    path('adminusers/', views.AdminUserList.as_view(), name="admin_user_list"),
    path('adminusers/<int:pk>', views.AdminUserDetail.as_view(), name="admin_user_detail"),

    path('customerusers/', views.CustomerUserList.as_view(), name='customer_user_list'),
    path('customerusers/<int:pk>', views.CustomerUserDetail.as_view(), name='customer_user_detail'),

    path('carts/', views.CartList.as_view(), name="cart_list"),
    path('carts/<int:pk>', views.CartDetail.as_view(), name="cart_detail"),

    path('cartitems/', views.CartItemList.as_view(), name="cart_item_list"),
    path('cartitems/<int:pk>', views.CartItemDetail.as_view(), name="cart_item_detail"),

    path('orders/', views.OrderList.as_view(), name="order_list"),
    path('orders/<int:pk>', views.OrderDetail.as_view(), name="order_detail"),

]