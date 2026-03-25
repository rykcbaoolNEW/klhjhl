FROM node:18-alpine

ENV NODE_ENV=production
ARG NPM_BUILD="npm install --omit=dev"
EXPOSE 8080/tcp

LABEL maintainer="ryk"
LABEL summary="Scramjet but ryk"
LABEL description="Scramjet ryk"

WORKDIR /app

COPY package.json ./
RUN apk add --upgrade --no-cache python3 make g++
RUN npm install --omit=dev

COPY . .

ENTRYPOINT ["node"]
CMD ["src/index.js"]
