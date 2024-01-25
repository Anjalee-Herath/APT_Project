# Generated by Django 5.0.1 on 2024-01-25 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('content', models.TextField()),
                ('type', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=50)),
                ('location', models.CharField(max_length=150)),
                ('bedroom', models.IntegerField(blank=True, null=True)),
                ('bathroom', models.IntegerField(blank=True, null=True)),
                ('hall', models.IntegerField(blank=True, null=True)),
                ('kitchen', models.IntegerField(blank=True, null=True)),
                ('image', models.ImageField(upload_to='upload/images')),
            ],
        ),
    ]
