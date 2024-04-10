from django.shortcuts import render
from rest_framework import generics
from .serializers import CategorySerializer, SubcategorySerializer, ProductSerializer, InventoryAdjustmentSerializer, WarehouseInventoryProductSerializer, StoreDiscountSerializer, StoreSerializer, StoreInventoryProductSerializer, AdminUserSerializer, CustomerUserSerializer, CartSerializer, CartItemSerializer, OrderSerializer
from .models import Category, Subcategory, Product, Inventory_Adjustment, Warehouse_Inventory_Product, Store_Discount, Store, Store_Inventory_Product, Admin_User, Customer_User, Cart, Cart_Item, Order
# Create your views here.
  
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
#-------------------------------------------------------------
class SubcategoryList(generics.ListCreateAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer

class SubcategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer
#-------------------------------------------------------------
class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
#-------------------------------------------------------------
class InventoryAdjustmentList(generics.ListCreateAPIView):
    queryset = Inventory_Adjustment.objects.all()
    serializer_class = InventoryAdjustmentSerializer

class InventoryAdjustmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Inventory_Adjustment.objects.all()
    serializer_class = InventoryAdjustmentSerializer
#-------------------------------------------------------------
class WarehouseInventoryProductList(generics.ListCreateAPIView):
    queryset = Warehouse_Inventory_Product.objects.all()
    serializer_class = WarehouseInventoryProductSerializer

class WarehouseInventoryProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Warehouse_Inventory_Product.objects.all()
    serializer_class = WarehouseInventoryProductSerializer
#-------------------------------------------------------------
class StoreDiscountList(generics.ListCreateAPIView):
    queryset = Store_Discount.objects.all()
    serializer_class = StoreDiscountSerializer

class StoreDiscountDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Store_Discount.objects.all()
    serializer_class = StoreDiscountSerializer
#-------------------------------------------------------------
class StoreList(generics.ListCreateAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

class StoreDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
#-------------------------------------------------------------
class StoreInventoryProductList(generics.ListCreateAPIView):
    queryset = Store_Inventory_Product.objects.all()
    serializer_class = StoreInventoryProductSerializer

class StoreInventoryProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Store_Inventory_Product.objects.all()
    serializer_class = StoreInventoryProductSerializer
#-------------------------------------------------------------
class AdminUserList(generics.ListCreateAPIView):
    queryset = Admin_User.objects.all()
    serializer_class = AdminUserSerializer

class AdminUserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Admin_User.objects.all()
    serializer_class = AdminUserSerializer
#-------------------------------------------------------------
class CustomerUserList(generics.ListCreateAPIView):
    queryset = Customer_User.objects.all()
    serializer_class = CustomerUserSerializer

class CustomerUserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer_User.objects.all()
    serializer_class = CustomerUserSerializer
#-------------------------------------------------------------
class CartList(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class CartDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
#-------------------------------------------------------------
class CartItemList(generics.ListCreateAPIView):
    queryset = Cart_Item.objects.all()
    serializer_class = CartItemSerializer

class CartItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart_Item.objects.all()
    serializer_class = CartItemSerializer
#-------------------------------------------------------------
class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
