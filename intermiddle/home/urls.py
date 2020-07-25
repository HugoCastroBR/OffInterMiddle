from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.index, name='index'),
    path('buscar',views.buscar,name='buscar'),
    path('login',views.login,name='login'),
    path('register',views.register,name='register'),
    #path('page',views.page,name='page'),
    path('<int:Post_id>',views.page, name='page')
]
