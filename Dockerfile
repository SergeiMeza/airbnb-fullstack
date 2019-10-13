FROM node:12-alpine

WORKDIR /airbnb

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN yarn install --production

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist

COPY ./packages/server/.env.prod ./packages/server/.env

FROM node:12-alpine
WORKDIR /airbnb
COPY --from=0 /airbnb .

WORKDIR ./packages/server

ENV NODE_ENV dev
ENV MONGO_HOST host.docker.internal
ENV REDIS_HOST host.docker.internal

EXPOSE 4000

CMD ["node", "dist/src/index.js"]