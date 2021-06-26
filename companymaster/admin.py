from django.contrib import admin

# Register your models here.
from .models import Companymaster


@admin.register(Companymaster)
class UnPopulationAdmin(admin.ModelAdmin):

    list_display = ('corporate_identification_number',
                    'company_name',
                    'company_class',
                    'date_of_registration',
                    'authorized_cap',
                    'principal_business_activity_as_per_cin')
    search_fields = ['company_name', 'company_class']
    ordering = ['corporate_identification_number']
