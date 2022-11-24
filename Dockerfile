FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN ["chmod", "+x", "bin/csr-api"]
RUN npm run dev

CMD []