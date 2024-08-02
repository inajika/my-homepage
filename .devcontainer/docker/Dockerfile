FROM node:20.13.1-bookworm

WORKDIR /web

RUN apt-get -y update \
  && apt-get -y upgrade \
  && npm install -g npm@latest

COPY ./web/ .

RUN npm install

EXPOSE 4321