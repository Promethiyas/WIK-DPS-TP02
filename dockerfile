FROM node:14 as base
RUN useradd -ms /bin/bash newuser
USER newuser
WORKDIR /home/newuser/app

COPY package*.json ./

RUN npm i

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build