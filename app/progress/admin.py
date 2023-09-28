from django.contrib import admin

from progress.models import ProgressSnapshot
# Register your models here.

@admin.register(ProgressSnapshot)
class ProgressSnapshotAdmin(admin.ModelAdmin):
    list_display = (
        'step_count',
        'distance',
        'time',
        'created_at',
    )
    search_fields = ('created_at',)
