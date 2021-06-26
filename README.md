# Company Master :: Maharashtra DataProject django rest framework

## Aim

To convert raw open data into highchart, that tell a story on the state of company registration in Maharashtra.Then present in the highchart in website.

## How to get the data

* The dataset can be downloaded from [link](https://data.gov.in/resources/company-master-data-maharashtra-upto-21st-april-2018)
* Download file change file name run `mv mca_maharashtra_21042018.csv mca_maharashtra.csv`

## Requirements

* You have require a any browser like Chrome,Firefox,safari etc.
* Require internet connectivity.
* All requirements and dependencies run `pip3 install -r requirements.txt`

## How to run project

* Clone a repository in your system `https://gitlab.com/mountblue/cohort-14-python/rakshit_sarkheliya/dataproject-django-rest-framework`

* You need to open postgres using this command `sudo -u postgres psql`

* Create a Role and Database in postgres using this script `\i script/createhelper.sql`

* Run command `python manage.py makemigrations` and `python manage.py migrate` in the repository folder which is apply migrations.

* Run command `python manage.py csvload` in the repository folder which load the csvdata in database.

* Run command `python manage.py createsuperuser` in the repository folder which createsuperuser.

* Delete a Role and Database in postgres using this script `\i script/drophelper.sql`

* Run command `python manage.py runserver` in the repository folder which start server.

* Open url [http://127.0.0.1:8000/] in Browser.
