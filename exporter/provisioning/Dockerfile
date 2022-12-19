FROM node:18-alpine
USER root
RUN yarn global add @nestjs/cli
RUN mkdir -p /etc/service
RUN mkdir -p /app
COPY ./files/entrypoint.sh /etc/service/entrypoint.sh

USER node
ENTRYPOINT /etc/service/entrypoint.sh
