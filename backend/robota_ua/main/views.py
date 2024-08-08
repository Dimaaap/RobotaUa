from rest_framework.views import APIView
from rest_framework.response import Response

from .models import City, Region
from .serializers import CitySerializer


class AllCitiesView(APIView):
    def get(self, request):
        cities = City.objects.all().order_by("title")
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)


