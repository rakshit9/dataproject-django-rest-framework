from django.db import models


# Create your models here.

class Companymaster(models.Model):

    corporate_identification_number = models.CharField(max_length=120)
    company_name = models.CharField(max_length=120)
    company_class = models.CharField(max_length=120)
    date_of_registration = models.DateField()
    authorized_cap = models.FloatField()
    principal_business_activity_as_per_cin = models.CharField(max_length=120)

    # def __str__(self):
    #     return self.COMPANY_CLASS
