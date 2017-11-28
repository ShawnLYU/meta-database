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
from django.contrib.auth import authenticate
from django.core.files.storage import FileSystemStorage


from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from tokens import account_activation_token
from django.core.mail import EmailMessage



def home(request):
    return render(request, "index.html")


def data_tools(request):
    return render(request, "data_tools.html")

def login(request):
    if request.user.is_authenticated(): 
        return redirect('/respiratory_microbial_gene_catalogue/')

    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    if username=='' and password == '':
        return render(request,'login.html')
    user = auth.authenticate(username=username, password=password)
    if user.is_active == False:
        return render(request,'login.html', {'msg':'You need to first confirm your email address'}) 
    elif user is not None and user.is_active:
        auth.login(request, user)
        return redirect('/respiratory_microbial_gene_catalogue/mission-list')
    else:
        return render(request,'login.html', {'msg':'Login Failed'}) 

def logout(request):
    auth.logout(request)
    return redirect('/respiratory_microbial_gene_catalogue/')

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
                # auth.login(request, user)
                user.is_active = False
                user.save()
                current_site = get_current_site(request)
                message = render_to_string('acc_active_email.html', {
                    'user':user, 
                    'domain':current_site.domain,
                    'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                    'token': account_activation_token.make_token(user),
                })
                mail_subject = 'Activate your blog account.'
                to_email = email
                email = EmailMessage(mail_subject, message, to=[to_email])
                email.send()
                # send_register_email(request, email, user_role.email_verification)
                return render(request,'login.html', {'msg':'A confirm email has been sent to you.'}) 
            except IntegrityError:
                msg = u'please check username, email and password'
    return render(request, 'register.html', {'msg': msg, 'username': username, 'email': email, 'fname':fname,'lname':lname})


def mission_list(request):
    if not request.user.is_authenticated(): 
        return redirect('/respiratory_microbial_gene_catalogue/accounts/login/')
    return render(request,'mission_list.html') 


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
            

            myfile = request.FILES['file']
            fs = FileSystemStorage()
            filename = fs.save(os.path.join(folder, myfile.name),myfile)
            project = Project.objects.create(user=request.user,title=title,status=0)
            project.save()
            # send_register_email(request, email, user_role.email_verification)
            return redirect('/respiratory_microbial_gene_catalogue/mission-list')
        except IntegrityError:
            msg = u'please check username, email and password'            
    return render(request,'create_mission.html',{'msg':msg})     

def parseName(input):
    return re.sub(r'\W+', '', input)

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)
        # return redirect('home')
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')









