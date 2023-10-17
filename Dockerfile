FROM --platform=linux/amd64 node:18-buster-slim as builder-stage
COPY package.json package.json
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]