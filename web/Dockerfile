FROM node:20.13.1-bookworm

WORKDIR /web

RUN apt-get update \
  && apt-get upgrade \
  && npm install -g npm@latest

COPY . .

RUN npm install

EXPOSE 4321