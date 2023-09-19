FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install next@latest react@latest react-dom@latest
RUN npm run build
CMD ["npm","run", "start"]