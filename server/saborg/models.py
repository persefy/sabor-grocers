from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "categories"

class Subcategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "subcategories"
    
class Product(models.Model):
    product_no = models.CharField(max_length=9, unique=True)
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE, related_name='products')
    short_description = models.CharField(max_length=100)
    details = models.TextField()
    preferred_vendor = models.CharField(max_length=100)
    average_cost = models.DecimalField(decimal_places=2, max_digits=6)
    sku = models.IntegerField()
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.product_no
    
class Inventory_Adjustment(models.Model):
    inventory_adjustment = models.CharField(max_length=9, unique=True)
    product_no = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='inventory_adjustments')
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
    warehouse_inventory_product = models.CharField(max_length=9, unique=True)
    inventory_adjustment = models.ForeignKey(Inventory_Adjustment, on_delete=models.CASCADE, related_name='warehouse_inventory_products')
    qty = models.IntegerField()
    uom = models.CharField(max_length=20)
    qty_modified_date = models.DateField()
    qty_modified_time = models.TimeField()
    unit_price = models.DecimalField(decimal_places=2, max_digits=6)

    def __str__(self):
        return self.warehouse_inventory_product
    
class Store_Discount(models.Model):
    discount_label = models.CharField(max_length=100, unique=True)
    discounted_sku = models.IntegerField()
    discounted_category = models.CharField(max_length=100)
    discount_percentage = models.DecimalField(decimal_places=2, max_digits=3, default=0.00)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.discount_label

class Store(models.Model):
    store_no = models.CharField(max_length=4, unique=True)
    street_address = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=20)
    sunday_open = models.BooleanField(default=True)
    monday_open = models.BooleanField(default=True)
    tuesday_open = models.BooleanField(default=True)
    wednesday_open = models.BooleanField(default=True)
    thursday_open = models.BooleanField(default=True)
    friday_open = models.BooleanField(default=True)
    saturday_open = models.BooleanField(default=False)
    sunday_start_time = models.TimeField(blank=True)
    sunday_end_time = models.TimeField(blank=True)
    monday_start_time = models.TimeField(blank=True)
    monday_end_time = models.TimeField(blank=True)
    tuesday_start_time = models.TimeField(blank=True)
    tuesday_end_time = models.TimeField(blank=True)
    wednesday_start_time = models.TimeField(blank=True)
    wednesday_end_time = models.TimeField(blank=True)
    thursday_start_time = models.TimeField(blank=True)
    thursday_end_time = models.TimeField(blank=True)
    friday_start_time = models.TimeField(blank=True)
    friday_end_time = models.TimeField(blank=True)
    saturday_start_time = models.TimeField(blank=True)
    saturday_end_time = models.TimeField(blank=True)
    store_phone = models.CharField(max_length=15)
    special_msg = models.TextField()
    image_url = models.URLField(default='https://morguefile.nyc3.cdn.digitaloceanspaces.com/imageData/public/files/w/wallyir/preview/fldr_2010_05_06/file7421273138239.jpg')

    def __str__(self):
        return self.store_no
    
class Store_Inventory_Product(models.Model):
    store_inventory_product = models.CharField(max_length=9, unique=True)
    store_no = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='store_inventory_products')
    warehouse_inventory_product = models.ForeignKey(Warehouse_Inventory_Product, on_delete=models.CASCADE, related_name='store_inventory_products')
    store_discount = models.ForeignKey(Store_Discount, on_delete=models.CASCADE, related_name='store_inventory_products')
    qty = models.IntegerField()
    store_set_price = models.DecimalField(decimal_places=2, max_digits=6)
    discounted_price = models.DecimalField(decimal_places=2, max_digits=6)
    transfer_shipping_enabled = models.BooleanField()

    def __str__(self):
        return self.store_inventory_product
    
class Admin_User(models.Model):
    admin_user_no = models.CharField(max_length=9, unique=True)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    last_login_date = models.DateField()
    last_login_time = models.TimeField()

    def __str__(self):
        return self.admin_user_no
    
class Customer_User(models.Model):
    customer_user_no = models.CharField(max_length=9, unique=True)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    preferred_store = models.CharField(max_length=100)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    street_address = models.CharField(max_length=50)
    street_address2 = models.CharField(max_length=20,blank=True)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=20)
    phone = models.CharField(max_length=15)
    email =models.CharField(max_length=100)
    last_login_date = models.DateField()
    last_login_time = models.TimeField()

    def __str__(self):
        return self.customer_user_no
    
class Cart(models.Model):
    cart_no = models.CharField(max_length=9, unique=True)
    customer_user_no = models.ForeignKey(Customer_User, on_delete=models.CASCADE, related_name='carts',blank=True)
    guest_checkout = models.BooleanField(default=True)
    cart_type = models.CharField(max_length=100)
    
    def __str__(self):
        return self.cart_no
    
class Cart_Item(models.Model):
    cart_item = models.CharField(max_length=9, unique=True)
    cart_no = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='cart_items')
    product_no = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='cart_items')
    qty = models.IntegerField()
    
    def __str__(self):
        return self.cart_item

class Order(models.Model):
    order_no = models.CharField(max_length=12, unique=True)
    cart_no = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='orders')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email=models.CharField(max_length=100)
    address = models.TextField()
    phone = models.CharField(max_length=15)
    date = models.DateField()
    time = models.TimeField()
    sales_subtotal = models.DecimalField(decimal_places=2, max_digits=6)
    taxes = models.DecimalField(decimal_places=2, max_digits=5)
    sales_total = models.DecimalField(decimal_places=2, max_digits=6)

    def __str__(self):
        return self.order_no