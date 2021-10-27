FROM node:lts-alpine

WORKDIR /app

COPY . /app/
COPY next.config.js /app/

EXPOSE 3000

RUN npm install --save
RUN npm run build

CMD npm run start