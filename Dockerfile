FROM node:18-alpine

WORKDIR /app

COPY package.json /app/

COPY package-lock.json /app/

ENV NODE_ENV production

RUN npm ci

COPY . .

RUN npm run build

COPY ./src/swagger ./dist/swagger

RUN npx prisma generate

CMD [ "npm", "start" ]


