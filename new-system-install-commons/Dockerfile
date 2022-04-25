# syntax=docker/dockerfile:1
# This is an example Dockerfile, showcasing how you would use this program to
# simplify installation of stuff in all of your images (or boxes).
FROM ubuntu

WORKDIR /install

COPY ./nsic.sh .
RUN chmod +x ./nsic.sh
RUN ./nsic.sh

WORKDIR /app