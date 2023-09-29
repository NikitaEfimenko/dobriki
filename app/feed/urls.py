from django.urls import path
from rest_framework.routers import DefaultRouter
from feed.views import ArticleViewSet, ArticleCategoryViewSet, FiltersAPIView

router = DefaultRouter()
router.register(r'articles', ArticleViewSet)
router.register(r'category', ArticleCategoryViewSet)

urlpatterns = [
    path('filters/', FiltersAPIView.as_view()),
]

urlpatterns += router.urls
