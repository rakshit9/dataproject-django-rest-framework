# Generated by Django 2.2.17 on 2020-12-20 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Companymaster',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CORPORATE_IDENTIFICATION_NUMBER', models.CharField(max_length=120)),
                ('COMPANY_NAME', models.CharField(max_length=120)),
                ('COMPANY_CLASS', models.CharField(max_length=120)),
                ('DATE_OF_REGISTRATION', models.DateField()),
                ('AUTHORIZED_CAP', models.FloatField()),
                ('PRINCIPAL_BUSINESS_ACTIVITY_AS_PER_CIN', models.CharField(max_length=120)),
            ],
        ),
    ]