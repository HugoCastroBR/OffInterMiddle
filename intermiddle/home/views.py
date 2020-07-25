from django.shortcuts import render,get_list_or_404,get_object_or_404
from django.http import request
from .models import AllPost
# Create your views here.

def index(request):
    return render(request,'index.html')

def login(request):
    return render(request,'login/login.html')

def register(request):
    return render(request,'login/register.html')

def page(request, Post_id ):
    pageAtual = get_object_or_404(AllPost, pk=Post_id)

    Post_a_exibir = {
        'page': pageAtual
    }

    return render(request,'page.html',Post_a_exibir)

def buscar(request):
    lista_Posts = AllPost.objects.order_by('-data_do_post').filter(publicada=True)

    if 'buscar' in request.GET:
        nome_a_buscar = request.GET['buscar']
        if buscar:
            lista_Posts = lista_Posts.filter(TituloPost__icontains=nome_a_buscar)

    dados = {
        'Posts': lista_Posts,
    }
    

    return render(request,'buscar.html',dados)