FROM --platform=linux/amd64 node:18-buster-slim as builder-stage
COPY package.json package.json
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine as deploy-stage
COPY --from=builder-stage build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]