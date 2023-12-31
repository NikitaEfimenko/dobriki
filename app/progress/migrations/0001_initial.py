# Generated by Django 4.1.7 on 2023-09-27 14:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ProgressSnapshot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('step_count', models.PositiveIntegerField(default=0, verbose_name='Количество шагов')),
                ('distance', models.CharField(blank=True, max_length=100, null=True, verbose_name='Расстояние')),
                ('time', models.CharField(blank=True, max_length=100, null=True, verbose_name='Время')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Дата и время создания')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
