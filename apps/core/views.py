from django.shortcuts import render

from apps.gym.models import Gym

# Create your views here.
def frontpage(request):
    gyms = Gym.objects.all()
    
    context = {
        'gyms': gyms
    }
    return render(request, 'frontpage.html', context)


def contact(request):
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')
