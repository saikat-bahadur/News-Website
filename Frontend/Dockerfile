FROM node:18-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm rebuild esbuild

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

