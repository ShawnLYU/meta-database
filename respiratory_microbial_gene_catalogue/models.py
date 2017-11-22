from django.db import models
from django.contrib.auth.models import User
from online_database.settings import *
from django.utils.translation import ugettext_lazy as _
import os
import datetime
import json
# Create your models here.

class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.IntegerField(default=0)
    title = models.CharField(max_length=50, null=True)
    create_date = models.DateTimeField(default=datetime.datetime.now)

