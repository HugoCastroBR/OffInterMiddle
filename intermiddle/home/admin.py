from django.contrib import admin
from .models import AllPost
# Register your models here.

class ListandoPosts(admin.ModelAdmin):
    list_display = ('id', 'TituloPost','categoria','preco','publicada')
    list_display_links = ('id','TituloPost')
    search_fields = ('TituloPost',)
    list_filter = ('categoria',)
    list_editable = ('publicada',)
    list_per_page = 10

admin.site.register(AllPost, ListandoPosts)