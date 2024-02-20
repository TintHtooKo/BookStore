from .models import *
from rest_framework import serializers

class KnowledgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeModel
        fields = "__all__"