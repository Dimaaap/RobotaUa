from .models import Region
from .parsers import parse_regions

def insert_regions_in_db():
    regions = parse_regions()
    for region in regions:
        new_region = Region.objects.create(title=region)
        try:
            new_region.save()
        except Exception as e:
            print(e)
    return "Success"