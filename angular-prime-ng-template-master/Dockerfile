FROM node:18 AS build

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm install -g @angular/cli

RUN ng build --configuration production

FROM nginx:alpine

COPY --from=build /app/dist/sakai-ng /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]