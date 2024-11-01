# Etap budowania aplikacji Angular SSR
FROM node:18 AS build

WORKDIR /usr/src/app

# Skopiuj pliki package.json i package-lock.json i zainstaluj zależności
COPY package*.json ./
RUN npm install

# Skopiuj pliki projektu i zbuduj wersję SSR
COPY . .
RUN npm run build:ssr

# Drugi etap: Użyj Node.js do serwowania aplikacji SSR
FROM node:18-alpine

WORKDIR /usr/src/app

# Skopiuj pliki z etapu budowania
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules

# Expose port dla Node.js
EXPOSE 4000

# Uruchom serwer SSR
CMD ["node", "dist/fbe-solutions/server/main.js"]