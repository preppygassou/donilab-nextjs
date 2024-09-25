FROM node:20.17.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json yarn.lock ./

RUN yarn install

COPY . . 

CMD ["yarn", "dev"]