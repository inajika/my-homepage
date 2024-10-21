FROM node:23.0.0-slim

# コンテナの日本語化
ENV LANG=C.UTF-8
ENV LANGUAGE=en_US:

RUN apt-get -y update \
  && apt-get -y upgrade \
  && apt-get install -y sudo git vim \
  && npm install -g npm@latest npm-check-updates

ARG USERNAME=node

# コンテナを操作するユーザ
USER ${USERNAME}

# ホームディレクトリを明示的に定義
ENV HOME=/home/${USERNAME}

ARG PROJECT_ROOT=/service
WORKDIR ${PROJECT_ROOT}

EXPOSE 4321
