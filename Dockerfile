FROM node:12-alpine

WORKDIR /airbnb

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN yarn install --production

COPY ./packages/server/dist ./packages/server/
COPY ./packages/common/dist ./packages/server/

COPY ./packages/server/.env.prod ./packages/server/


WORKDIR ./packages/server

ENV NODE_ENV production

EXPOSE 4000

CMD ["node", "dist/index.js"]