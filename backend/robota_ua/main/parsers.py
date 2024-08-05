import bisect

import requests
from bs4 import BeautifulSoup

from .exceptions import RequestError
from .services import clean_regions_title

REGIONS_URL = "https://fakty.com.ua/ua/ukraine/20240619-skilky-oblastej-v-ukrayini-administratyvno-terytorialnyj-ustrij-krayiny/"

def parse_regions() -> list | RequestError:
    request = requests.get(REGIONS_URL)
    if request.status_code == 200:
        soup = BeautifulSoup(request.text, "lxml")
        regions_list = soup.find("ul").find_all("li")
        regions = []
        for region in regions_list:
            region_title = region.find("span").text
            regions.append(region_title)
        cleaned_regions = clean_regions_title(regions)[1:]
        bisect.insort(cleaned_regions, "Крим")
        return cleaned_regions
    else:
        raise RequestError("Incorrect request")