FROM node:14-alpine as base

WORKDIR /src
COPY package.json package-lock.json /src/
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /src
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /src
CMD ["nodemon", "bin/www"]