from django.db import models

class Ciuch(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    size = models.CharField(max_length=4)
    description = models.TextField(max_length=1000)
    main_img = models.ImageField(upload_to='uploads/user/', null=True, default=None)

