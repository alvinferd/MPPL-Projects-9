# Generated by Django 3.2.9 on 2021-11-27 04:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_order_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='totalPembelian',
            new_name='totalHarga',
        ),
    ]
