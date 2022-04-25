# syntax=docker/dockerfile:1
FROM clojure:tools-deps-slim-buster

ARG VERSION=v0.2.0

WORKDIR /install

COPY ./nsic-${VERSION} .
RUN chmod +x nsic-${VERSION}
RUN ./nsic-${VERSION}

WORKDIR /app