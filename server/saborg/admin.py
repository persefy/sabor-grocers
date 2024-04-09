from django.contrib import admin
from .models import Category, Subcategory, Product, Inventory_Adjustment, Warehouse_Inventory_Product, Store_Discount, Store, Store_Inventory_Product, Admin_User, Customer_User, Cart, Cart_Item, Order

# Register your models here.

admin.site.register(Category)
admin.site.register(Subcategory)
admin.site.register(Product)
admin.site.register(Inventory_Adjustment)
admin.site.register(Warehouse_Inventory_Product)
admin.site.register(Store_Discount)
admin.site.register(Store)
admin.site.register(Store_Inventory_Product)
admin.site.register(Admin_User)
admin.site.register(Customer_User)
admin.site.register(Cart)
admin.site.register(Cart_Item)
admin.site.register(Order)