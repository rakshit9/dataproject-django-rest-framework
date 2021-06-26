from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [

    path('', views.plot_first_page, name='plot_one_page'),
    path('plotfirst/', views.plot_first_view, name='plot_one_view'),
    path('plotsecond/', views.plot_second_view, name='plot_one_view'),
    path('plotthird/', views.plot_third_view, name='plot_third_view'),
    path('plotfourth/', views.plot_fourth_view, name='plot_fourth_view'),

]


urlpatterns = format_suffix_patterns(urlpatterns)
