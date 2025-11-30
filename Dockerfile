# --- base ---
FROM node:22.14.0-alpine AS base
WORKDIR /ath-frontend
ADD package*.json ./

# --- dev ---
FROM base AS dev
RUN npm install
ADD . .
CMD ["npm", "run", "dev"]

# --- build ---
FROM base AS build
RUN npm ci
ADD . .
RUN npm run build

# --- prod ---
FROM node:22.14.0-alpine AS prod
WORKDIR /ath-frontend
COPY --from=build /ath-frontend/dist ./dist
ADD package*.json ./
RUN npm ci --omit=dev
CMD ["npm", "run", "start"]



EXPOSE 3000