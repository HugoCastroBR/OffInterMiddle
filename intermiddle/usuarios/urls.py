from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('cadastro',views.cadastro, name='cadastro'),
    path('cadastro/pessoa',views.cadastro_pessoa,name='pessoa'),
    path('cadastro/empresa',views.cadastro_empresa,name='empresa'),
    path('cadastro/loja',views.cadastro_loja,name='loja'),
    path('login',views.login, name='login'),
    path('dashboard',views.dashboard,name='dashboard'),
    path('logout',views.logout,name='logout'),
    path('logout_login',views.logout_login,name='logout_login')
]
