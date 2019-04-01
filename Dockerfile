FROM node:10.13-alpine
LABEL Alejandro Quisbert <alexandro@autistici.org>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install && npm run compile

EXPOSE 3000

CMD [ "npm", "start" ]
