FROM node:22.14.0-alpine
WORKDIR /frontend
ADD package.json package.json
RUN npm install
ADD . .
CMD ["npm", "run", "dev"]

EXPOSE 3000