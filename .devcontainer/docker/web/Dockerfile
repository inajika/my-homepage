FROM node:22.9.0-slim

# コンテナの日本語化
ENV LANG=C.UTF-8
ENV LANGUAGE=en_US:

RUN apt-get -y update \
  && apt-get -y upgrade \
  && apt-get install -y sudo git vim \
  && npm install -g npm@latest npm-check-updates

# ユーザ追加
## ユーザ名
ARG USERNAME=astro
## ユーザパスワード(.envで定義)
ARG PASSWORD
## ユーザグループ名
ARG GROUPNAME=astro
## ユーザID
ARG UID=1001
## グループID
ARG GID=1001

RUN groupadd -g ${GID} ${GROUPNAME} && \
  useradd -m -s /bin/bash -u ${UID} -g ${GID} -G sudo ${USERNAME} && \
  echo ${USERNAME}:${PASSWORD} | chpasswd && \
  echo "${USERNAME}   ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# コンテナを操作するユーザ
USER ${USERNAME}

# ホームディレクトリを明示的に定義
ENV HOME=/home/${USERNAME}

ARG PROJECT_ROOT=/service
WORKDIR ${PROJECT_ROOT}

EXPOSE 4321
