from apps.gym.models import Gym

# Strictly being used currently to learnm how to use context processor

def menu_gyms(request):
    gyms = Gym.objects.all()
    
    return {'menu_gyms': gyms}