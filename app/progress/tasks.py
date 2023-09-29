from collections import defaultdict

from progress.models import ProgressSnapshot, DailyProgress

#TODO
def commit_progress():
    snapshots = ProgressSnapshot.objects.all()
    user_ids = snapshots.values_list('id', flat=True)
    progress = {}

    for i in snapshots:
        if progress.get(i.user.primary_key):
            progress[i.user.primary_key]['steps'] += i.step_count
            progress[i.user.primary_key]['distance'] += i.distance
        else:
            progress[i.user.primary_key] = {
                'steps': i.step_count,
                'distance': i.distance
            }
    # for k, v in progress:
    #     DailyProgress.objects.update_or_create()
    ProgressSnapshot.objects.filter(pk__in=set(user_ids)).delete()