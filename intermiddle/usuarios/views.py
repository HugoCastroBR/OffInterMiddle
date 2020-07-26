from django.shortcuts import render,redirect
from django.template import RequestContext
from django.contrib.auth.models import User
from django.contrib import auth,messages

def cadastro(request):
    return render(request,'usuarios/MainRegister.html')

def cadastro_pessoa(request):
        if request.method == 'POST':
            nomeMain = request.POST['NomeMain']
            username = request.POST['NomeUser']
            PhoneNumber = request.POST['PhoneNumber']
            Estado = request.POST['Estado']
            email = request.POST['Email']
            Senha1 = request.POST['Senha1']
            Senha2 = request.POST['Senha2']
            print("Alert: Cadastro_loja")
            if not username.strip():
                print('Alert: O campo nome nao pode ficar em branco')
                messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
                return redirect('loja')
            if not nomeMain.strip():
                print('Alert: o campo nome nao podem ficar em branco')
                messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
                return redirect('loja')
            if not Senha1.strip():
                print('Alert: O campo senha1 nao podem ficar em branco')
                messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
                return redirect('loja')
            if not Senha2.strip():
                print('Alert: O campo senha2 nao podem ficar em branco')
                messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
                return redirect('loja')
            if Senha1 != Senha2:
                messages.error(request,'As senhas não são iguais')
                print('Alert: Senhas não coencidem')
                return redirect('loja')
            if User.objects.filter(email=email).exists():
                messages.error(request,'Email Ja Cadastrado')
                print("Alert: email ja cadastrado")
                return redirect('loja')
            if User.objects.filter(username=username).exists():
                print("username ja cadastrado")
                messages.error(request,'Nome de Usuario Ja Cadastrado')
                return redirect('pessoa')
            user = User.objects.create_user(username=username,email=email,password=Senha1,last_name = nomeMain,first_name = "Pessoa")
            user.save()
            print("Alert: Usuario Cadastrado %s %s %s %s"%(nomeMain,username,Estado,email))
            return redirect('login')
    
        return render(request,'usuarios/Pessoa.html')

def cadastro_empresa(request):
    if request.method == 'POST':
        nomeMain = request.POST['NomeMain']
        username = request.POST['NomeUser']
        PhoneNumber = request.POST['PhoneNumber']
        Estado = request.POST['Estado']
        email = request.POST['Email']
        Senha1 = request.POST['Senha1']
        Senha2 = request.POST['Senha2']
        print("Alert: Cadastro_empresa")
        if not username.strip():
            print('Alert: O campo nome nao pode ficar em branco')
            messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
            return redirect('empresa')
        if not nomeMain.strip():
            print('Alert: o campo nome nao podem ficar em branco')
            messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
            return redirect('empresa')
        if not Senha1.strip():
            print('Alert: O campo senha1 nao podem ficar em branco')
            messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
            return redirect('empresa')
        if not Senha2.strip():
            print('Alert: O campo senha2 nao podem ficar em branco')
            messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
            return redirect('empresa')
        if Senha1 != Senha2:
            messages.error(request,'As senhas não são iguais')
            print('Alert: Senhas não coencidem')
            return redirect('empresa')
        if User.objects.filter(email=email).exists():
            messages.error(request,'Email Ja Cadastrado')
            print("Alert: email ja cadastrado")
            return redirect('empresa')
        if User.objects.filter(username=username).exists():
            print("username ja cadastrado")
            messages.error(request,'Nome de Usuario Ja Cadastrado')
            return redirect('empresa')
        user = User.objects.create_user(username=username,email=email,password=Senha1,last_name = nomeMain,first_name = "Empresa")
        user.save()
        print("Alert: Usuario Cadastrado %s %s %s %s"%(nomeMain,username,Estado,email))
        return redirect('login')

    return render(request,'usuarios/Empresa.html')
def cadastro_loja(request):
    if request.method == 'POST':
        nomeMain = request.POST['NomeMain']
        username = request.POST['NomeUser']
        PhoneNumber = request.POST['PhoneNumber']
        Estado = request.POST['Estado']
        email = request.POST['Email']
        Senha1 = request.POST['Senha1']
        Senha2 = request.POST['Senha2']
        print("Alert: Cadastro_loja")
        if not username.strip():
            print('Alert: O campo nome nao pode ficar em branco')
            messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
            return redirect('loja')
        if not nomeMain.strip():
            print('Alert: o campo nome nao podem ficar em branco')
            messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
            return redirect('loja')
        if not Senha1.strip():
            print('Alert: O campo senha1 nao podem ficar em branco')
            messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
            return redirect('loja')
        if not Senha2.strip():
            print('Alert: O campo senha2 nao podem ficar em branco')
            messages.error(request,'Nenhum campo pode ter menos de 4 caracteres')
            return redirect('loja')
        if Senha1 != Senha2:
            messages.error(request,'As senhas não são iguais')
            print('Alert: Senhas não coencidem')
            return redirect('loja')
        if User.objects.filter(email=email).exists():
            messages.error(request,'Email Ja Cadastrado')
            print("Alert: email ja cadastrado")
            return redirect('loja')
        if User.objects.filter(username=username).exists():
            print("Alert: username ja cadastrado")
            messages.error(request,'Nome de Usuario Ja Cadastrado')
            return redirect('loja')
        user = User.objects.create_user(username=username,email=email,password=Senha1,last_name = nomeMain,first_name = "Loja")
        user.save()
        print("Alert: Usuario Cadastrado %s %s %s %s"%(nomeMain,username,Estado,email))
        return redirect('login')
   
    return render(request,'usuarios/loja.html')




def login(request):
    if request.method == 'POST':
        username = request.POST['NomeUser']
        Senha = request.POST['Senha']
        if username == "" or Senha == "":
            print("campos Vazios")
        print(username,Senha)
        
        if User.objects.filter(username=username).exists():
            user = auth.authenticate(request, username=username, password=Senha)
            if user is not None:
                auth.login(request, user)
                print("Alert: Usuario Logado com sucesso, %s , %s , %s ,"%(user.first_name,username,user.last_name))
                return redirect('index')
            else:
                messages.error(request,'Usuario e/ou senha incorretos!')
                return redirect('login')
        else:
            messages.error(request,'Usuario e/ou senha incorretos!')
            return redirect('login')

    return render(request,'usuarios/login.html')

def logout(request):
    auth.logout(request)
    return redirect('index')

def logout_login(request):
    auth.logout(request)
    return redirect('login')

def dashboard(request):
    pass