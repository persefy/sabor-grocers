from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    prefix = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Product(models.Model):
    product_id = models.CharField(max_length=9)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    short_description = models.CharField(max_length=100, default='product name')
    details = models.TextField(default='product description')
    preferred_vendor = models.CharField(max_length=100, default='no vendor set')
    average_cost = models.DecimalField(decimal_places=2, max_digits=6)
    sku = models.IntegerField()

    def __str__(self):
        return self.product_id
    
class Inventory_Adjustment(models.Model):
    inventory_adjustment = models.CharField(max_length=9)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='inventory_adjustments')
    count_modified_reason = models.CharField()
    qty = models.IntegerField()
    purchase_cost = models.DecimalField(decimal_places=2, max_digits=6)
    vendor = models.CharField(max_length=50)
    adjustment_date = models.DateField()
    adjustment_time = models.TimeField()
    notes = models.TextField()

    def __str__(self):
        return self.inventory_adjustment

class Warehouse_Inventory_Product(models.Model):
    warehouse_inventory_product = models.CharField(max_length=9)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='warehouse_inventory_products')
    qty = models.IntegerField()
    uom = models.CharField(max_length=20)
    qty_modified_date = models.DateField()
    qty_modified_time = models.TimeField()
    unit_price = models.DecimalField(decimal_places=2, max_digits=6)

    def __str__(self):
        return self.warehouse_inventory_product
    
class Store(models.Model):
    store_id = models.CharField(max_length=4)
    address = models.TextField()
    sunday_open = models.BooleanField()
    monday_open = models.BooleanField()
    tuesday_open = models.BooleanField()
    wednesday_open = models.BooleanField()
    thursday_open = models.BooleanField()
    friday_open = models.BooleanField()
    saturday_open = models.BooleanField()
    sunday_start_time = models.TimeField()
    sunday_end_time = models.TimeField()
    monday_start_time = models.TimeField()
    monday_end_time = models.TimeField()
    tuesday_start_time = models.TimeField()
    tuesday_end_time = models.TimeField()
    wednesday_start_time = models.TimeField()
    wednesday_end_time = models.TimeField()
    thursday_start_time = models.TimeField()
    thursday_end_time = models.TimeField()
    friday_start_time = models.TimeField()
    friday_end_time = models.TimeField()
    saturday_start_time = models.TimeField()
    saturday_end_time = models.TimeField()
    store_phone = models.CharField(max_length=15)
    special_msg = models.TextField()

    def __str__(self):
        return self.store_id
    
class Store_Discount(models.Model):
    discount_label = models.CharField(max_length=100)
    store_id = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='store_inventory_products')
    category_name = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='store_discount')
    discounted_sku = models.IntegerField()
    discounted_category = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.discount_label
    
class Store_Inventory_Product(models.Model):
    store_inventory_product = models.CharField(max_length=9)
    store_id = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='store_inventory_products')
    warehouse_inventory_product = models.ForeignKey(Warehouse_Inventory_Product, on_delete=models.CASCADE, related_name='store_inventory_products')
    store_discount = models.ForeignKey(Store_Discount, on_delete=models.CASCADE, related_name='store_inventory_products')
    qty = models.IntegerField()
    store_set_price = models.DecimalField(decimal_places=2, max_digits=6)
    discounted_price = models.DecimalField(decimal_places=2, max_digits=6)
    transfer_shipping_enabled = models.BooleanField()

    def __str__(self):
        return self.store_inventory_product
    
class Admin_User(models.Model):
    admin_user_id = models.CharField(max_length=9)
    store_id = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='admin_users')
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    associated_store = models.CharField(max_length=100)
    edit_access = models.CharField(max_length=100)
    last_login_date = models.DateField()
    last_login_time = models.TimeField()

    def __str__(self):
        return self.admin_user_id
    
class Customer_User(models.Model):
    customer_user_id = models.CharField(max_length=9)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    store_id = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='customer_users')
    preferred_store = models.CharField(max_length=100)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.TextField()
    phone = models.CharField(max_length=15)
    email=models.CharField(max_length=100)
    last_login_date = models.DateField()
    last_login_time = models.TimeField()

    def __str__(self):
        return self.customer_user_id
    
class Cart(models.Model):
    cart_id = models.CharField(max_length=9)
    customer_id = models.ForeignKey(Customer_User, on_delete=models.CASCADE, related_name='carts')
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='carts')
    qty = models.IntegerField()
    cart_type = models.CharField(max_length=100)
    
    def __str__(self):
        return self.cart_id

class Order(models.Model):
    order_no = models.CharField(max_length=12)
    customer_id = models.ForeignKey(Customer_User, on_delete=models.CASCADE, related_name='orders')
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='orders')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email=models.CharField(max_length=100)
    address = models.TextField()
    phone = models.CharField(max_length=15)
    date = models.DateField()
    time = models.TimeField()
    #product = models.<prod + qty need to be within a list/array/object>
    qty = models.IntegerField()
    sales_subtotal = models.DecimalField(decimal_places=2, max_digits=6)
    taxes = models.DecimalField(decimal_places=2, max_digits=5)
    sales_total = models.DecimalField(decimal_places=2, max_digits=6)

    def __str__(self):
        return self.order_no