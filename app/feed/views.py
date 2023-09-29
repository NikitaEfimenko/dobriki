from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, generics, status
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.response import Response

from feed.services.filters_service import get_all_filters
from feed.utils.filters import ArticleFilter, TagsFilter
from feed.mixins.like_mixin import LikedMixin
from feed.models import Article, ArticleCategory
from feed.utils.permissions import ArticlePermission, ArticleCategoryPermission
from feed.serializers import ArticleCategoryPreviewSerializer, ArticlePreviewSerializer
from feed.serializers import ArticleSerializer, ArticleCategorySerializer
from feed.utils.paginators import StandardResultsSetPagination


class ArticleCategoryViewSet(viewsets.ModelViewSet):
    queryset = ArticleCategory.objects.all()
    serializer_class = ArticleCategorySerializer
    permission_classes = (ArticleCategoryPermission,)

    def get_serializer_class(self):
        if self.action == 'list':
            return ArticleCategoryPreviewSerializer
        else:
            return ArticleCategorySerializer


class ArticleViewSet(LikedMixin, viewsets.ModelViewSet):
    queryset = Article.objects.all()
    pagination_class = StandardResultsSetPagination
    permission_classes = (ArticlePermission,)
    filter_backends = [OrderingFilter, SearchFilter, DjangoFilterBackend, TagsFilter]
    ordering_fields = ['likes', 'created_date']
    ordering = ['-created_date']
    search_fields = ['$title']
    filterset_class = ArticleFilter

    def get_serializer_class(self):
        if self.action == 'list':
            return ArticlePreviewSerializer
        else:
            return ArticleSerializer


class FiltersAPIView(generics.GenericAPIView):
    def get(self, request):
        return Response(status=status.HTTP_200_OK, data=get_all_filters())
