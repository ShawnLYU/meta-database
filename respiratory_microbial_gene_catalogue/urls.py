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
    url(r'^respiratory_microbial_gene_catalogue/$', home, name='home'),
    url(r'^respiratory_microbial_gene_catalogue/data-tools/', data_tools, name='data-tools'),
    url(r'^respiratory_microbial_gene_catalogue/media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': MEDIA_ROOT}),
    url(r'^respiratory_microbial_gene_catalogue/accounts/login/', login, name='login'),
    url(r'^respiratory_microbial_gene_catalogue/accounts/logout/', logout, name='logout'),
    url(r'^respiratory_microbial_gene_catalogue/accounts/register/$', register, name='register'),
    url(r'^respiratory_microbial_gene_catalogue/mission-list/$', mission_list, name='mission_list'),
    url(r'^respiratory_microbial_gene_catalogue/acquire_missions/$', acquire_missions, name='acquire_missions'),
    url(r'^respiratory_microbial_gene_catalogue/demo-mission/$', demo_mission, name='demo_mission'),
    url(r'^respiratory_microbial_gene_catalogue/create-mission/$', create_mission, name='create_mission'),
    url(r'^respiratory_microbial_gene_catalogue/activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', activate, name='activate'),
    # url('^register/', system_register, name='register'),
    # url('^logout/', system_logout, name='logout'),


    # url(r'^chart/$', chart, name='chart'),
    # url(r'^dashboard/$', dashboard, name='dashboard'),
    # url(r'^createproject/$', createproject, name='createproject'),
    # url(r'^upload/$', upload, name='upload'),
    # url(r'^projectDetails/$', projectDetails, name='projectDetails')

]
