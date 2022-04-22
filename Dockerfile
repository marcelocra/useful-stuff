# syntax=docker/dockerfile:1
FROM ubuntu

# Prepare this image to be used as base for writing my scripts.
COPY docker-commons/bin/docker-commons .
RUN ./docker-commons