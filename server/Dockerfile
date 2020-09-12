
FROM node:10

WORKDIR /usr/Famre

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3456

CMD [ "node", "index.js" ]