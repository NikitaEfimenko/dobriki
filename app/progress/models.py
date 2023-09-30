from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class ActivityIndicators(models.Model):
    step_count = models.PositiveIntegerField(verbose_name="Количество шагов", default=0)
    distance = models.CharField(max_length=100, verbose_name="Расстояние", blank=True, null=True)
    time = models.CharField(max_length=100, verbose_name="Время", blank=True, null=True)

    class Meta:
        abstract = True


class ProgressSnapshot(ActivityIndicators, models.Model):
    user = models.ForeignKey(to=UserModel, verbose_name="Пользователь", on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(verbose_name="Дата и время создания", auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return f"Слепок прогресса для {self.user}"


class Aim(models.Model):
    user = models.ForeignKey(to=UserModel, verbose_name="Пользователь", on_delete=models.CASCADE)
    step_aim = models.PositiveBigIntegerField(verbose_name="Цель по шагам", default=10000)


class DailyProgress(ActivityIndicators, models.Model):
    user = models.ForeignKey(to=UserModel, verbose_name="Пользователь", on_delete=models.CASCADE)
    date = models.DateField(verbose_name="Дата", auto_now_add=True)

    def __str__(self):
        return f"Дневной прогресса для пользователя"
