from .models import Accounts
from rest_framework import serializers

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = ['first_name' , 'last_name' , 'email' , 'mobile' , 'password' ]

