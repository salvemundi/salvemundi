FROM node:lts-alpine
RUN npm install -g http-server

WORKDIR /site
COPY ./dist ./

EXPOSE 8080
CMD http-server /site --proxy "http://localhost:8080?" -c-1