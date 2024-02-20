from django.shortcuts import render
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from .models import *
from .serializer import *

@api_view(['GET'])
def Book(request):
    book = KnowledgeModel.objects.all()
    seri = KnowledgeSerializer(book,many=True)
    return Response(seri.data, status=200)

@api_view(['POST'])
def BookCreate(request):
    seri = KnowledgeSerializer(data=request.data)
    if seri.is_valid():
        seri.save()
        return Response(seri.data,status=200)
    else:
        return Response(seri.errors,status=500)

@api_view(['GET'])
def BookDetail(request,bk_id):
    try:
        book = KnowledgeModel.objects.get(id = bk_id)
    except Exception:
        return Response({"message":"Error Book"},status=404)
    seri = KnowledgeSerializer(book)
    return Response(seri.data,status=200)