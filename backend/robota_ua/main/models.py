from random import randint
from uuid import uuid4

from django.db import models


generated_id = set()

def get_unique_id():
    while True:
        new_id = randint(100_000, 999_999)
        if new_id not in generated_id:
            generated_id.add(new_id)
            return new_id



class Company(models.Model):

    class EmployeeCount(models.TextChoices):
        FROM_1_10 = "1-10", "Від 1 до 10"
        FROM_10_50 = "10-50", "Від 10 до 50"
        FROM_50_100 = "50-100", "Від 50 до 100"
        FROM_100_500 = "100-500", "Від 100 до 500"
        MORE_THAN_500 = "500+", "Більше 500"

    company_id = models.BigIntegerField(unique=True, primary_key=True)
    title = models.CharField(max_length=100, null=False)
    company_site = models.URLField(max_length=255, null=True, default="")
    created_year = models.IntegerField(default=2024)
    employee_count = models.CharField(max_length=7, choices=EmployeeCount.choices,
                                      default=EmployeeCount.FROM_1_10)
    main_image = models.ImageField(upload_to="companies/main_photo/%Y/%m/%d", blank=True, default="")
    layer_image = models.ImageField(upload_to="companies/layer_photo/%Y/%m/%d", blank=True, default="")
    facebook_link = models.URLField(max_length=255, blank=True)
    instagram_link = models.URLField(max_length=255, blank=True)
    linkedin_link = models.URLField(max_length=255, blank=True)
    description = models.TextField(default="")
    is_checked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} {self.employee_count}"

    def save(self, *args, **kwargs):
        self.company_id = get_unique_id()
        super(Company, self).save(*args, **kwargs)


class CompanyVacancies(models.Model):
    vacancy_id = models.BigIntegerField(primary_key=True)
    company_id = models.ManyToManyField(Company)
    vacancy_title = models.TextField(default="")
    profession_id = models.ForeignKey("Profession", on_delete=models.CASCADE, default="")
    city_id = models.ForeignKey("City", on_delete=models.CASCADE, default="")

    def __str__(self):
        return self.vacancy_title


class Profession(models.Model):
    profession_id = models.UUIDField(default=uuid4, primary_key=True)
    title = models.CharField(max_length=130, default="")
    slug = models.SlugField(max_length=100, default="")

    def __str__(self):
        return f"{self.title} {self.slug}"


class City(models.Model):
    city_id = models.UUIDField(default=uuid4, primary_key=True)
    title = models.CharField(max_length=60, default="")
    city_image = models.ImageField(upload_to="cities/city", default="", blank=True)
    slug = models.SlugField(max_length=50, default="")
    region_id = models.OneToOneField("Region", on_delete=models.CASCADE, default="")

    def __str__(self):
        return self.title


class Region(models.Model):
    region_id = models.UUIDField(default=uuid4, primary_key=True)
    title = models.CharField(max_length=60, default="")

    def __str__(self):
        return self.title