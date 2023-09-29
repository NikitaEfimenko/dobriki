# from django.contrib.auth.base_user import AbstractBaseUser
# from django.contrib.auth.models import PermissionsMixin
# from django.db import models
# from django.utils.translation import gettext_lazy as _
#
# from accounts.utils.managers import CustomUserManager
#
#
# class CustomUser(AbstractBaseUser, PermissionsMixin):
#     """
#     Base user model which will be implemented by role user
#     """
#
#     class UserRole(models.IntegerChoices):
#         USER = 1, _("Пользователь")
#         MANAGER = 2, _("Управляющий сайтом")
#         ADMIN = 3, _("Администратор")
#
#     email = models.EmailField(_("Почта"), unique=True)
#     is_admin = models.BooleanField(_("Является ли админом"), default=False)
#     is_active = models.BooleanField(_("Активен ли аккаунт"), default=True)
#     register_date = models.DateField(_("Дата регистрации"), auto_now=True)
#     role = models.PositiveSmallIntegerField(_("Роль пользователя"), choices=UserRole.choices, default=UserRole.USER)
#     first_name = models.CharField(_("Имя"), max_length=32, blank=True)
#     last_name = models.CharField(_("Фамилия"), max_length=32, blank=True)
#     student_group = models.CharField(_("Группа обучающего"), max_length=16, blank=True)
#     telephone_number = models.CharField(_("Номер телефона"), max_length=16, blank=True)
#     avatar = models.ImageField(_("Фотография пользователя"), upload_to='user/avatar', blank=True)
#
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []
#
#     objects = CustomUserManager()
#
#     def __str__(self):
#         return f"{self.email} - {self.first_name} {self.last_name} - {self.student_group}"
#
#     @property
#     def json_role(self) -> dict:
#         role = next({"id": i[0], "name": i[1]} for i in self.UserRole.choices if i[0] == self.role)
#         return role if role else {}
#
#     @property
#     def full_name(self):
#         return f"{self.first_name} {self.last_name}" if self.first_name or self.last_name else None
#
#     class Meta:
#         verbose_name = "Пользователь"
#         verbose_name_plural = "Пользователи"
