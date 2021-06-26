from django.core.management.base import BaseCommand
from companymaster.models import Companymaster
from datetime import datetime
import csv


class Command(BaseCommand):
    def handle(self, *args, **options):

        with open('mca_maharashtra.csv', encoding='latin-1') as csv_file:

            csv_reader = csv.reader(csv_file, delimiter=',')
            next(csv_reader)

            objs = [Companymaster(
                        corporate_identification_number=row[0],
                        company_name=row[1],
                        company_class=row[3],
                        date_of_registration=(
                            datetime.strptime(row[6], '%d-%m-%Y').date()),
                        authorized_cap=row[8],
                        principal_business_activity_as_per_cin=row[11]
                    )for row in csv_reader if (
                        row[6] != '00-01-1900' and row[6] != 'NA')]

            Companymaster.objects.bulk_create(objs)

        self.stdout.write(self.style.SUCCESS('Successfully save data'))
