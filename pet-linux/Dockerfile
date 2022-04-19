# syntax=docker/dockerfile:1

FROM alpine

RUN apk update

RUN apk add curl
RUN apk add git

RUN curl -o /root/.gitconfig https://raw.githubusercontent.com/marcelocra/.dotfiles/master/.gitconfig
