def clean_regions_title(cities: list[str]) -> list[str]:
    cleaned_regions = []
    for city in cities:
        city = city.strip("- ").rstrip(";")
        city = city.split(",")[0]
        cleaned_regions.append(city)
    return cleaned_regions


def clean_city_title(city_title: str) -> str:
    city_title = city_title.strip("м.\xa0")
    return city_title