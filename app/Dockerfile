FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
RUN apt-get update && \
    apt-get install -y locales && \
    apt-get install -y libldap2-dev libsasl2-dev libssl-dev netcat-openbsd libreoffice poppler-utils && \
    echo ru_RU.UTF-8 UTF-8 >> /etc/locale.gen && \
    locale-gen && \
    python -m pip install poetry && \
    poetry config virtualenvs.create false && \
    rm -rf /var/lib/apt/lists/* && rm -rf /etc/apk/cache
# COPY pyproject.toml poetry.lock ./
# RUN python -m pip install --upgrade pip && poetry install --no-root
COPY . /app/

# RUN mkdir -p /app/static && python manage.py collectstatic --noinput
EXPOSE 80
# CMD /usr/local/bin/gunicorn --threads 4 --chdir /app scontracts.wsgi:application -b :80
