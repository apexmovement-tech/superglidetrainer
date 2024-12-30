FROM node:22 AS build

WORKDIR /app

COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html/superglidetrainer
