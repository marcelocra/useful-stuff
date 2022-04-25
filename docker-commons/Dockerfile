# syntax=docker/dockerfile:1

# This is an example Dockerfile, showcasing how you would use this program to
# simplify installation of stuff in all of your images.
FROM ubuntu

WORKDIR /install

COPY ./docker-commons .
RUN chmod +x ./docker-commons
RUN ./docker-commons

WORKDIR /app