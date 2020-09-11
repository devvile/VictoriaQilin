from django.db import models

class Obraz(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    sold = models.BooleanField(default=False)
    on_main = models.BooleanField(default=False)
    main_img = models.ImageField(upload_to='static/uploads/art', null=True, default=None)

    def __str__(self):
        return self.name