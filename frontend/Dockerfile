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

# Kopiowanie wyniku budowania z etapu "builder"
COPY --from=builder /app/dist /app/dist

# Kopiowanie pliku package.json i package-lock.json
COPY --from=builder /app/package*.json ./

# Instalacja zależności produkcyjnych
RUN npm install --omit=dev

# Eksponowanie portu
EXPOSE 4000

# Uruchamianie serwera SSR
CMD ["node", "dist/server/main.js"]
