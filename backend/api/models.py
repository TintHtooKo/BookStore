from django.db import models

class KnowledgeModel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    about = models.TextField()
    frontPage = models.ImageField()
    page1 = models.ImageField()
    page2 = models.ImageField()
    page3 = models.ImageField()
    page4 = models.ImageField()
    file = models.FileField(upload_to='media/')

    def __str__(self):
        return self.name