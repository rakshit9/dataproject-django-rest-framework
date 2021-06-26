from rest_framework import serializers
from .models import Companymaster


class CompanymasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companymaster
        fields = ['corporate_identification_number',
                  'company_name',
                  'company_class',
                  'date_of_registration',
                  'authorized_cap',
                  'principal_business_activity_as_per_cin']


class YourSerializer(serializers.Serializer):
    name = serializers.CharField()
    count = serializers.IntegerField()


class TwoPlotSerializer(serializers.Serializer):
    """Your data serializer, define your fields here."""

    date_of_registration__year = serializers.IntegerField()
    count = serializers.IntegerField()


class ThirdPlotSerializer(serializers.Serializer):
    """Your data serializer, define your fields here."""

    principal_business_activity_as_per_cin = serializers.CharField()
    count = serializers.IntegerField()


class FourthPlotSerializer(serializers.Serializer):
    """Your data serializer, define your fields here."""
    principal_business_activity_as_per_cin = serializers.CharField()
    date_of_registration__year = serializers.IntegerField()
    count = serializers.IntegerField()
