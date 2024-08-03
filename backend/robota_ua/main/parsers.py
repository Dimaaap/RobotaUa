import bisect

import requests
import selenium.common.exceptions
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from .exceptions import RequestError
from .services import clean_regions_title, clean_city_title

REGIONS_URL = "https://fakty.com.ua/ua/ukraine/20240619-skilky-oblastej-v-ukrayini-administratyvno-terytorialnyj-ustrij-krayiny/"
CITIES_URL = "https://mistaua.com/%D0%9F%D0%BE%D1%88%D1%83%D0%BA_%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%85_%D0%BF%D1%83%D0%BD%D0%BA%D1%82%D1%96%D0%B2"

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


def parse_cities():
    city_data = {}
    driver = webdriver.Chrome()
    driver.get(CITIES_URL)
    for page_number in range(0, 69):
        print(f"Now in {page_number} page")
        print(city_data)
        try:
            wait = WebDriverWait(driver, 10)
            button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, f"a[data-pages='?citySPG={page_number}']")))
            button.click()
        except selenium.common.exceptions.ElementClickInterceptedException:
            continue
        except selenium.common.exceptions.TimeoutException:
            continue
        else:
            wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "table")))

            page_source = driver.page_source
            soup = BeautifulSoup(page_source, "lxml")
            cities_list = soup.find("table").find_all("tr")
            print(f"cities_list finded - {cities_list is not None}")

            for city in cities_list[1:]:
                city_title = clean_city_title(city.find("a").text)
                city_region = city.find(attrs={"class": "region"}).text
                city_data[city_title] = city_region
    driver.quit()
    return city_data

# def parse_cities():
#     city_data = {}
#     driver = webdriver.Chrome()
#     driver.get(CITIES_URL)
#     request = requests.get(CITIES_URL)
#     if request.status_code == 200:
#         soup = BeautifulSoup(request.text, "lxml")
#         print(soup)
#         cities_list = soup.find("table").find_all("tr")
#         for city in cities_list[1:]:
#             city_title = clean_city_title(city.find("a").text)
#             city_region = city.find(attrs={"class": "region"}).text
#             city_data[city_title] = city_region
#     else:
#         raise RequestError("Incorrect request")
#     return city_data
