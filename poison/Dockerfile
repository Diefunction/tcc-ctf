FROM node:14-alpine

ENV BIND_ADDR=0.0.0.0 PORT=80
EXPOSE 80

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./src .
RUN npm install

USER 1000:1000
ENV NODE_ENV=production

CMD ["npm", "start"]