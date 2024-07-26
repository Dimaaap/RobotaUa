from django.shortcuts import render, HttpResponse


def main_page_view(request):
    return HttpResponse("HELLO")
