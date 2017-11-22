from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from models import *
import os
from django.conf import settings
from django.contrib import auth
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from online_database.settings import MEDIA_ROOT
import re, datetime
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage

def home(request):
    return render(request, "index.html")


def data_tools(request):
    return render(request, "data_tools.html")

def login(request):
    if request.user.is_authenticated(): 
        return redirect('/')

    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    
    user = auth.authenticate(username=username, password=password)

    if user is not None and user.is_active:
        auth.login(request, user)
        return redirect('/mission-list')
    else:
        return render(request,'login.html') 

def logout(request):
    auth.logout(request)
    return redirect('/')

def register(request):
    msg = None
    username = None
    email = None
    lname = None
    fname = None
    if request.POST:
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        email = request.POST['email']
        fname = request.POST.get('fname', '')
        lname = request.POST.get('lname', '')

        if len(username) == 0:
            return render(request,'register.html') 
        elif User.objects.filter(username=username).count() > 0:
            msg = 'username exists'
        elif User.objects.filter(email=email).count() > 0:
            msg = 'email has been registered'

        if not msg:
            try:
                folder = parseName(username)
                if not os.path.exists(os.path.join(MEDIA_ROOT,folder)):
                    os.makedirs(os.path.join(MEDIA_ROOT,folder))
                user = User.objects.create_user(username=username,password=password,email=email,first_name=fname, last_name=lname)
                user = authenticate(username=username, password=password)
                user.save()
                # send_register_email(request, email, user_role.email_verification)
                return redirect('/mission-list')
            except IntegrityError:
                msg = u'please check username, email and password'
    return render(request, 'register.html', {'msg': msg, 'username': username, 'email': email, 'fname':fname,'lname':lname})


def mission_list(request):
    if not request.user.is_authenticated(): 
        return redirect('/accounts/login/')
    return render(request,'mission_list.html') 


def mission(request):
    project_folder='demo'
    return render(request,'mission.html',{'project_folder':project_folder}) 

def acquire_missions(request):
    status_dict={
        0:'pending',
        1:'running',
        2:'finished'
    }
    projects = Project.objects.filter(user=request.user)
    result = [{'title':o.title,'status':status_dict[o.status],'create_date':o.create_date.strftime('%Y-%m-%d %H:%M')} for o in projects]
    print result
    return JsonResponse({'data':result})

def demo_mission(request):
    project_folder='demo'
    return render(request,'mission.html',{'project_folder':project_folder})     

def create_mission(request):
    msg = None
    title = None
    
    title = request.POST.get('title', '')

    if len(title)==0:
        return render(request,'create_mission.html')
    elif Project.objects.filter(title=parseName(title)).count()>0:
        msg = 'Project title existed'

    if not msg:
        try:

            folder = os.path.join(parseName(request.user.username),parseName(title)) 
            if not os.path.exists(os.path.join(MEDIA_ROOT,folder)):
                os.makedirs(os.path.join(MEDIA_ROOT,folder))
            print request.FILES

            myfile = request.FILES['file']
            fs = FileSystemStorage()
            filename = fs.save(os.path.join(folder, myfile.name),myfile)
            project = Project.objects.create(user=request.user,title=title,status=0)
            project.save()
            # send_register_email(request, email, user_role.email_verification)
            return redirect('/mission-list')
        except IntegrityError:
            msg = u'please check username, email and password'            
    return render(request,'create_mission.html',{'msg':msg})     

def parseName(input):
    return re.sub(r'\W+', '', input)











