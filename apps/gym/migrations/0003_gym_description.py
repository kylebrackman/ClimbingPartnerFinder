# Generated by Django 4.2.10 on 2024-03-19 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0002_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='gym',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
