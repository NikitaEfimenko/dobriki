import re
from django.contrib import admin
from django.urls import path, include

from drf_yasg import openapi
from drf_yasg.generators import OpenAPISchemaGenerator
from drf_yasg.views import get_schema_view
from rest_framework.permissions import AllowAny


class InconsistentNestedApiSchemaGenerator(OpenAPISchemaGenerator):
    """
    if we got no common prefix, we need this stuff to get okaish tags in schema
    """

    version_path = re.compile(r"/?api/(?:(v\d+)/)?([^/]+)")

    def get_schema(self, *args, **kwargs):  # noqa: ANN201
        schema = super().get_schema(*args, **kwargs)
        for item_path, item in schema.paths.items():
            match = self.version_path.match(item_path)
            if not match:
                continue
            ver, tag = match.groups()
            for _, op in item.operations:
                # ver may not be found
                op.tags = [f"{tag} {ver or ''}".rstrip()]
        return schema


schema_view = get_schema_view(
    openapi.Info(
        title="Dobriki API",
        default_version="v1",
    ),
    public=True,
    permission_classes=[AllowAny],
    generator_class=InconsistentNestedApiSchemaGenerator,
)

urlpatterns = [
    path('admin', admin.site.urls),
    path("swagger", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
    path('api/blog/', include('feed.urls')),
    path('api/auth/', include('accounts.urls')),
]
