from django.db import models

class Gym(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)

    # example Meta change below
    # class Meta:
    #     verbose_name_plural = 'gymies'

    def __str__(self):
        return self.name
    
    class Type(models.Model):
        name = models.CharField(max_length=100)
        slug = models.SlugField(max_length=100, unique=True)
        description = models.TextField(blank=True, null=True)
        price = models.FloatField()
    
        def __str__(self):
            return self.names
    
    # Possibly create "owner" model, create foreign keys accordingly