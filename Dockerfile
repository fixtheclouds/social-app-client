FROM node:14-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i
COPY . .

EXPOSE 3030

CMD [ "npm", "start" ]
