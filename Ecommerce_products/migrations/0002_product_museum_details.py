# Generated by Django 5.0.7 on 2024-08-05 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecommerce_products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='museum_details',
            field=models.TextField(default=''),
        ),
    ]
