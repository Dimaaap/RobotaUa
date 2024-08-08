from rest_framework import serializers

from .models import City, Region


class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = ["title", "slug", "region_id", "city_image"]
        read_only_fields = ["region_id", "city_image"]