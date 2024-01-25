from rest_framework import serializers
from .models import Property,users

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'
