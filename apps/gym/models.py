from django.db import models

class Gym(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)

    # example Meta change below
    # class Meta:
    #     verbose_name_plural = 'gymies'

    def __str__(self):
        return self.name
    