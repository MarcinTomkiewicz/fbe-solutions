# Etap 1: Budowanie aplikacji
FROM node:18 AS build

WORKDIR /usr/src/app

# Instalacja zależności
COPY package*.json ./
RUN npm install

# Skopiowanie kodu aplikacji i budowanie
COPY . .
RUN npm run build:ssr

# Etap 2: Uruchamianie aplikacji jako serwera Angular Universal
FROM node:18

WORKDIR /usr/src/app
COPY --from=build /usr/src/app ./

# Eksponowanie portu serwera Angular Universal
EXPOSE 4000

# Uruchomienie serwera aplikacji Angular Universal
CMD ["npm", "run", "serve:ssr"]