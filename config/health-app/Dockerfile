FROM php:8.0-apache

ENV BIND_ADDR=0.0.0.0 PORT=80
EXPOSE 80

WORKDIR /
COPY flag ./flag

WORKDIR /var/www/html
COPY external ./external
COPY internal ./internal
