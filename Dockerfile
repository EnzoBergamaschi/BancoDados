FROM node:23-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3333
CMD [ "node", "build/bin/server.js","--omit=dev" ]