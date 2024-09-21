from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Accounts
from .serializers import AccountSerializer
import jwt , datetime
from django.conf import settings
from django.contrib.auth.hashers import check_password

# Create your views here.
class SignupView(APIView):
    def post(self, request):
        user = Accounts.objects.filter(email=request.data['email'])
        if user:
            return Response({'msg': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        def post(self, request):
            email = request.data.get('email')
            password = request.data.get('password')

            # Find the user by email in MongoDB
            user = Accounts.objects.filter({'email': email})

            if user is None:
                return Response({'msg': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

            # Check if password matches the stored hashed password
            if not check_password(password, user['password']):
                return Response({'msg': 'Incorrect password'}, status=status.HTTP_401_UNAUTHORIZED)

            # Payload for JWT token
            payload = {
                'id': str(user['_id']),
                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
                'iat': datetime.datetime.utcnow(),
            }

            # Generate the JWT token
            token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')

            # Set response with JWT token
            response = Response()
            response.set_cookie('jwt', token, httponly=True, samesite='None', secure=True)
            response.data = {
                'status': True,
                "token": token,
                'msg': 'Login Successful',
            }

            return response
