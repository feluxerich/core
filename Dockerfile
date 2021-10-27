FROM node:alpine

WORKDIR /app

COPY . /app/
COPY next.config.js /app/

EXPOSE 3000

RUN npm install
RUN npm run build

CMD npm run start