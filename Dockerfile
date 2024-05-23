FROM node:18-alpine

WORKDIR /app

COPY package.json /app/

COPY package-lock.json /app/

ENV NODE_ENV production

RUN npm ci

COPY . .

RUN npm run build

RUN npx prisma generate

CMD [ "npm", "start" ]


