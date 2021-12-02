FROM python:3-alpine

RUN echo "https://dl-cdn.alpinelinux.org/alpine/v3.13/main" >> /etc/apk/repositories
RUN echo "https://dl-cdn.alpinelinux.org/alpine/v3.13/community" >> /etc/apk/repositories

RUN pip install flask PyYAML==5.1.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY challenge .

EXPOSE 80

ENV PYTHONDONTWRITEBYTECODE=1

ENTRYPOINT ["python3", "/usr/src/app/run.py"]