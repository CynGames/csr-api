FROM node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
#RUN ["chmod", "+x", "bin/csr-api"]

CMD ["npm", "start"]