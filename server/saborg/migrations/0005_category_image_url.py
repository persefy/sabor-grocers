# Generated by Django 5.0.4 on 2024-04-11 03:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('saborg', '0004_store_image_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image_url',
            field=models.URLField(default='https://morguefile.nyc3.cdn.digitaloceanspaces.com/imageData/public/files/a/Ahborson/11/p/88aa2a498505059349099720d4edf153.jpg'),
        ),
    ]
