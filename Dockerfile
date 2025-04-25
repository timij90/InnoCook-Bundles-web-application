FROM node:20-alpine

WORKDIR /app

COPY innocook--boundles-nextjs-app/package.json .

COPY InnoCook-Bundles-Backend/package.json .

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]