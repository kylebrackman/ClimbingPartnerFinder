from django.shortcuts import render, get_object_or_404

from .models import Gym

def gym_detail(request, slug):
    gym = get_object_or_404(Gym, slug=slug)
    
    context = {
        'gym': gym,
    }
    
    return render(request, 'gym_detail.html', context)