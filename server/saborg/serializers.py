from rest_framework import serializers
from .models import Category, Subcategory, Product, Inventory_Adjustment, Warehouse_Inventory_Product, Store_Discount, Store, Store_Inventory_Product, Admin_User, Customer_User, Cart, Cart_Item, Order

class OrderSerializer(serializers.HyperlinkedModelSerializer):
   #self
   #parent
   
    class Meta:
       model = Order
       fields = ('id','cart_no', 'first_name', 'last_name', 'email', 'address', 'phone', 'date', 'time', 'sales_subtotal', 'taxes', 'sales_total')

# ----------------------------------------------------------------------------------

class CartItemSerializer(serializers.HyperlinkedModelSerializer):
    #self
    #parent
    #child
    class Meta:
       model = Cart_Item
       fields = ('id','cart_item', 'cart_no', 'product_no', 'qty')

# ----------------------------------------------------------------------------------

class CartSerializer(serializers.HyperlinkedModelSerializer):
    #self
    #parent
    #child
    class Meta:
       model = Cart
       fields = ('id','cart_no','customer_no','guest_checkout','cart_type')

# ----------------------------------------------------------------------------------

class CustomerUserSerializer(serializers.HyperlinkedModelSerializer):
    #self
    #parent
    #child
    class Meta:
       model = Customer_User
       fields = ('id','customer_user_no', 'username', 'password', 'preferred_store', 'first_name', 'last_name', 'street_address', 'street_address2', 'city', 'state', 'phone', 'email', 'last_login_date','last_login_time')

# ----------------------------------------------------------------------------------

class AdminUserSerializer(serializers.HyperlinkedModelSerializer):
    #self
    #parent
    #child
    class Meta:
       model = Admin_User
       fields = ('id','admin_user_no', 'username', 'password', 'last_login_date', 'last_login_time')

# ----------------------------------------------------------------------------------

class StoreInventoryProductSerializer(serializers.HyperlinkedModelSerializer):
    #self 
    store_inventory_product_url = serializers.ModelSerializer.serializer_url_field(
        view_name='store_inventory_product_detail'
    )
    #parent(s)
    store_no = serializers.HyperlinkedRelatedField(
        view_name='store_detail',
        read_only=True
    )
    store_id = serializers.PrimaryKeyRelatedField(
        queryset=Store.objects.all(),
        source='store_no'
    )
    warehouse_inventory_product = serializers.HyperlinkedRelatedField(
        view_name='warehouse_inventory_product_detail',
        read_only=True
    )
    warehouse_inventory_product_id = serializers.PrimaryKeyRelatedField(
        queryset=Warehouse_Inventory_Product.objects.all(),
        source='warehouse_inventory_product'
    )
    store_discount = serializers.HyperlinkedRelatedField(
        view_name='store_discount_detail',
        read_only=True
    )
    store_discount_id = serializers.PrimaryKeyRelatedField(
        queryset=Store_Discount.objects.all(),
        source='store_discount'
    )
#     #child 
#     warehouse_inventory_products = WarehouseInventoryProductSerializer (
#         many=True,
#         read_only=True
#     )

    class Meta:
       model = Store_Inventory_Product
       fields = ('id','store_inventory_product','store_inventory_product_url', 'qty', 'store_set_price', 'discounted_price', 'transfer_shipping_enabled', 'store_no','store_id','warehouse_inventory_product','warehouse_inventory_product_id', 'store_discount','store_discount_id')

# ----------------------------------------------------------------------------------

class StoreSerializer(serializers.HyperlinkedModelSerializer):
    #self 
    store_url = serializers.ModelSerializer.serializer_url_field(
        view_name='store_detail'
    )
    #child

    class Meta:
       model = Store
       fields = ('id','store_url','store_no','street_address', 'city', 'state', 'sunday_open', 'monday_open', 'tuesday_open', 'wednesday_open', 'thursday_open', 'friday_open', 'saturday_open', 'sunday_start_time', 'sunday_end_time','monday_start_time','monday_end_time', 'tuesday_start_time', 'tuesday_end_time', 'wednesday_start_time', 'wednesday_end_time','thursday_start_time','thursday_end_time', 'friday_start_time', 'friday_end_time', 'saturday_start_time', 'saturday_end_time','store_phone','special_msg')

# 'store_inventory_product','store_inventory_product_url'
# ----------------------------------------------------------------------------------

class StoreDiscountSerializer(serializers.HyperlinkedModelSerializer):
    #child 
    #parent
    #child
    class Meta:
       model = Store_Discount
       fields = ('id','discount_label', 'discounted_sku', 'discounted_category','discount_percentage', 'start_date', 'end_date')

# ----------------------------------------------------------------------------------

class WarehouseInventoryProductSerializer(serializers.HyperlinkedModelSerializer):
    #self 
    warehouse_inventory_product_url = serializers.ModelSerializer.serializer_url_field(
        view_name='warehouse_inventory_product_detail'
    )
    #parent
    inventory_adjustment = serializers.HyperlinkedRelatedField(
        view_name='inventory_adjustment_detail',
        read_only=True
    )
    inventory_adjustment_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='inventory_adjustment'
    )
    class Meta:
       model = Warehouse_Inventory_Product
       fields = ('id','warehouse_inventory_product','warehouse_inventory_product_url', 'qty', 'uom', 'qty_modified_date', 'qty_modified_time', 'unit_price','inventory_adjustment','inventory_adjustment_id')
    
# ----------------------------------------------------------------------------------

class InventoryAdjustmentSerializer(serializers.HyperlinkedModelSerializer):
   #self 
    inventory_adjustment_url = serializers.ModelSerializer.serializer_url_field(
        view_name='inventory_adjustment_detail'
    )
   #parent
    product_no = serializers.HyperlinkedRelatedField(
        view_name='product_detail',
        read_only=True
    )
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product_no'
    )
    #child 
    warehouse_inventory_products = WarehouseInventoryProductSerializer (
        many=True,
        read_only=True
    )
    class Meta:
       model = Inventory_Adjustment
       fields = ('id','inventory_adjustment','inventory_adjustment_url','count_modified_reason', 'qty', 'purchase_cost', 'vendor', 'adjustment_date', 'adjustment_time', 'notes','product_no','product_id','warehouse_inventory_products')
    
# ----------------------------------------------------------------------------------

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    # self fields
    product_url = serializers.ModelSerializer.serializer_url_field(
        view_name='product_detail'
    )
    # parent fields
    subcategory = serializers.HyperlinkedRelatedField(
        view_name='subcategory_detail',
        read_only=True
    )
    subcategory_id = serializers.PrimaryKeyRelatedField(
        queryset=Subcategory.objects.all(),
        source='subcategory'
    )
    #child 
    inventory_adjustments = InventoryAdjustmentSerializer (
        many=True,
        read_only=True
    )
    class Meta:
       model = Product
       fields = ('id','product_no', 'product_url','short_description', 'details', 'preferred_vendor', 'average_cost', 'sku', 'image_url','subcategory','subcategory_id','inventory_adjustments')
     
# ----------------------------------------------------------------------------------

class SubcategorySerializer(serializers.HyperlinkedModelSerializer):
    #self
    subcategory_url = serializers.ModelSerializer.serializer_url_field(
        view_name='subcategory_detail'
    )
    # parent fields
    category = serializers.HyperlinkedRelatedField(
        view_name='category_detail',
        read_only=True
    )
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source='category'
    )
    # child fields
    products = ProductSerializer (
        many=True,
        read_only=True
    )
    class Meta:
       model = Subcategory
       fields = ('id','name','subcategory_url', 'image_url','category','category_id','products')

# ----------------------------------------------------------------------------------

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    # child fields
    subcategories = SubcategorySerializer (
        many=True,
        read_only=True
    )
    category_url = serializers.ModelSerializer.serializer_url_field(
        view_name='category_detail'
    )
    class Meta:
       model = Category
       fields = ('id','name','category_url','subcategories')

  
