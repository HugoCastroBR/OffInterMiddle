from django.db import models
from datetime import datetime
# Create your models here.

class AllPost(models.Model):
    #pessoa = models.ForeignKey(Pessoa,on_delete=models.CASCADE)
    TituloPost = models.CharField(max_length=25)
    descricao = models.TextField(max_length=255)
    descricao_no_buscar = models.TextField(max_length=150)
    preco  = models.IntegerField()
    categoria = models.CharField(max_length=100)
    data_do_post = models.DateTimeField(default=datetime.now, blank = True)
    foto_produto = models.ImageField(upload_to='fotos/%d/%m/%Y/',blank=True)
    Uma_Estrela = models.IntegerField(max_length=1000, default=0)
    Duas_Estrela = models.IntegerField(max_length=1000, default=0)
    Tres_Estrela =models.IntegerField(max_length=1000, default=0)
    Quatro_Estrela = models.IntegerField(max_length=1000, default=0)
    Cinco_Estrela = models.IntegerField(max_length=1000, default=0)
    Votos_Totais = models.IntegerField(max_length=5000, default=0)
    Estrelas = models.IntegerField(max_length=100, default=0)
    publicada = models.BooleanField(default=False)
    def __str__(self):
        return self.TituloPost