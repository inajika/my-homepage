FROM node:22.12-slim

ENV TZ=Asia/Tokyo
ENV NODE_ENV=development
# コンテナの日本語化
ENV LANG=C.UTF-8

RUN apt-get -y update \
  && apt-get -y upgrade \
  && apt-get install -y --no-install-recommends ca-certificates sudo git vim \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g npm@latest npm-check-updates

ARG USERNAME=node

RUN echo "${USERNAME}   ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# コンテナを操作するユーザ
USER ${USERNAME}

# ホームディレクトリを明示的に定義
ENV HOME=/home/${USERNAME}

ARG PROJECT_ROOT=/service/web/my-homepage
WORKDIR ${PROJECT_ROOT}

# Astro用
EXPOSE 4321
# Playwright用
EXPOSE 9323
