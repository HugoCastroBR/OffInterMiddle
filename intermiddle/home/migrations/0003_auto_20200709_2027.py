# Generated by Django 3.0.8 on 2020-07-09 23:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_remove_posts_rendimento'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Posts',
            new_name='AllPosts',
        ),
    ]
