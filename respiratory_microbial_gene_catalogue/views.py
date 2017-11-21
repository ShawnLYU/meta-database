from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from models import *
import os
from django.conf import settings

def home(request):
    return render(request, "index.html")


def data_tools(request):
    return render(request, "data-tools.html")

def download(request, path):
    print path
    file_path = os.path.join(settings.MEDIA_ROOT, path)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/vnd.ms-excel")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    raise Http404