from django.conf.urls import include, url
from views import *
from online_database.settings import MEDIA_ROOT
from django.conf.urls.static import static
from dajaxice.core import dajaxice_autodiscover, dajaxice_config
dajaxice_autodiscover()

urlpatterns = [
    # Examples:
    # url(r'^$', 'meta.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # ------------------------User authentication---------------------------------#
    url(r'^$', home, name='home'),
    url('^data-tools/', data_tools, name='data-tools'),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': MEDIA_ROOT}),
    # url('^register/', system_register, name='register'),
    # url('^logout/', system_logout, name='logout'),


    # url(r'^chart/$', chart, name='chart'),
    # url(r'^dashboard/$', dashboard, name='dashboard'),
    # url(r'^createproject/$', createproject, name='createproject'),
    # url(r'^upload/$', upload, name='upload'),
    # url(r'^projectDetails/$', projectDetails, name='projectDetails')

]
