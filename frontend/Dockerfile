# Etap 1: Budowanie aplikacji
FROM node:18 AS builder

WORKDIR /app

# Kopiowanie plików konfiguracyjnych
COPY package*.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie reszty kodu aplikacji
COPY . .

# Budowanie aplikacji z SSR
RUN npm run build:ssr

# Etap 2: Uruchamianie serwera SSR
FROM node:18 AS server

WORKDIR /app

# Kopiowanie wyników budowania z poprzedniego etapu
COPY --from=builder /app/dist /app/dist

# Instalacja zależności produkcyjnych
RUN npm install --production

# Eksponowanie portu
EXPOSE 4000

# Uruchamianie serwera SSR
CMD ["node", "dist/server/main.js"]
