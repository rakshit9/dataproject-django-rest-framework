from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Companymaster
from .serializers import (
    YourSerializer,
    ThirdPlotSerializer,
    TwoPlotSerializer,
    FourthPlotSerializer)
from django.db.models import (
    Case,
    CharField,
    Value,
    When,
    Count)
import json


@api_view(['POST'])
def plot_first_view(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'POST':
        data = json.loads(request.body)
        year = int(data["year"])
        endyear = int(data["range"])+year
        authtype = data["type"]

        plot = Companymaster.objects.filter(
            date_of_registration__year__gte=year,
            date_of_registration__year__lte=endyear,
            company_class__startswith=authtype)\
            .annotate(
                name=Case(
                    When(authorized_cap__lte=100000,
                         then=Value('<=1L')),
                    When(authorized_cap__gte=100000,
                         authorized_cap__lte=1000000,
                         then=Value('1L to 10L')),
                    When(authorized_cap__gte=1000000,
                         authorized_cap__lte=10000000,
                         then=Value('10L to 1Cr')),
                    When(authorized_cap__gte=10000000,
                         authorized_cap__lte=100000000,
                         then=Value('1Cr to 10 Cr')),

                    default=Value('>10Cr'),
                    output_field=CharField(),
                        ),).values('name').annotate(count=Count('name'))

        results = YourSerializer(plot, many=True).data
        return Response(results)


def plot_first_page(request):
    return render(request, "plot.html")


@api_view(['POST'])
def plot_second_view(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'POST':
        data = json.loads(request.body)
        year = int(data["startyear"])
        endyear = int(data["endyear"])
        authtype = data["pba"]

        plot = Companymaster.objects.filter(
            principal_business_activity_as_per_cin=authtype,
            date_of_registration__year__gte=year,
            date_of_registration__year__lte=endyear
        ).values('date_of_registration__year')\
            .annotate(count=Count('date_of_registration__year'))\
            .order_by('date_of_registration__year')
        results = TwoPlotSerializer(plot, many=True).data

        return Response(results)


@api_view(['POST'])
def plot_third_view(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'POST':
        data = json.loads(request.body)
        months = int(data["months"])
        year = int(data["year"])
        top = int(data["top"])

        plot = Companymaster.objects\
            .filter(date_of_registration__year=year,
                    date_of_registration__month__lte=months)\
            .values('principal_business_activity_as_per_cin')\
            .annotate(count=Count('principal_business_activity_as_per_cin'))\
            .order_by('-count')[:top]
        result = ThirdPlotSerializer(plot, many=True).data

        return Response(result)


@api_view(['POST'])
def plot_fourth_view(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'POST':
        data = json.loads(request.body)
        year = int(data["year"])
        endyear = int(data["range"]) + year
        pbaname = data["pba"]

        plot = Companymaster.objects\
            .filter(date_of_registration__year__gte=year,
                    date_of_registration__year__lte=endyear,
                    principal_business_activity_as_per_cin__in=pbaname)\
            .values(
                'principal_business_activity_as_per_cin',
                'date_of_registration__year')\
            .annotate(count=Count('date_of_registration__year'))\
            .order_by('date_of_registration__year')

        result = FourthPlotSerializer(plot, many=True).data

        return Response(result)
