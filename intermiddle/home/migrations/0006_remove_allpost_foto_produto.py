# Generated by Django 3.0.8 on 2020-07-19 19:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20200719_1610'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='allpost',
            name='foto_produto',
        ),
    ]