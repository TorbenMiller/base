FROM node:18-alpine


WORKDIR /app
COPY server/package.json ./
RUN yarn install
COPY ./server ./
CMD [ "yarn", "start:live" ]