FROM node:18-alpine

COPY database/ /app/database
WORKDIR /app/database

RUN echo $POSTGRES_USER $POSTGRES_PASSWORD $POSTGRES_DB

RUN yarn install
