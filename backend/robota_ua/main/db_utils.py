from .models import Region, City
from .parsers import parse_regions
from .data_storage import DataStorage

from django.template.defaultfilters import slugify

data_storage = DataStorage()

def insert_regions_in_db():
    regions = parse_regions()
    for region in regions:
        new_region = Region.objects.create(title=region)
        try:
            new_region.save()
        except Exception as e:
            print(e)
    return "Success"


def insert_cities_in_db():
    cities = data_storage.CITIES_INFO
    for region, cities_list in cities.items():
        print(region)
        region_in_db = Region.objects.get(title=region)
        try:
            for city in cities_list:
                new_city = City.objects.create(title=city, slug=slugify(city), region_id=region_in_db)
                new_city.save()
        except Exception as e:
            print(e)
    return "Success"