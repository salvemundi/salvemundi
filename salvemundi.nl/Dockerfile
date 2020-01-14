<<<<<<< HEAD
FROM node:12

WORKDIR /backend

COPY package.json .
COPY package-lock.json .

RUN npm i --production

ADD ./dist ./dist
COPY package.json ./dist

CMD node dist/src/main.js
EXPOSE 1337/tcp
=======
FROM node:lts-alpine
RUN npm install -g http-server

WORKDIR /site
COPY ./dist ./

EXPOSE 8080
CMD http-server /site --proxy "http://localhost:8080?" -c-1
>>>>>>> repo-b/master
