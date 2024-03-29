from typing import Any
from django.contrib.auth.models import AbstractUser, PermissionsMixin, UserManager
# AbstractUser and PermissionsMixin provide the core implementation of a user model, including hashed passwords, tokenized password resets, and permission management 
from django.db import models
from django.utils import timezone
from django.apps import AppConfig

class CustomUserManager(UserManager):
    
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set.')
        # normalize_email is built into Django
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(email, password, **extra_fields)
    
    
class User(AbstractUser, PermissionsMixin):
    name = models.CharField(max_length=100, blank=True, default='')
    email = models.EmailField(blank=True, default='', unique=True)
    climbing_styles = []
    ticks = []
    mountain_project_profile = models.URLField(blank=True, default='')
    eight_a_profile = models.URLField(blank=True, default='')
    times_available = []
    goal_grade = models.CharField(max_length=10, blank=True, default='')
    
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    
    date_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(blank=True, null=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'
    
    def get_full_name(self):
        return self.name or self.email.split('@')[0]
    
    class UserConfig(AppConfig):
        name = 'apps.user'