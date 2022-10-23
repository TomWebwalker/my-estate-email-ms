FROM node:16.16.0-alpine3.16

ARG emailHost
ENV EMAIL_HOST $emailHost

ARG emailUser
ENV EMAIL_USER $emailUser

ARG emailPassword
ENV EMAIL_PASSWORD $emailPassword

ARG emailFrom
ENV EMAIL_FROM $emailFrom

ARG rabbitMqUrl
ENV RABBITMQ_URL $rabbitMqUrl

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . .

CMD ["npm run start:prod"]