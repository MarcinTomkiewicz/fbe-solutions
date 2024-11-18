# Etap 1: Budowanie aplikacji Angular
FROM node:18 AS builder

WORKDIR /app

# Kopiuj pliki package.json i package-lock.json
COPY ./frontend/package*.json ./

# Instalacja zależności
RUN npm install

# Kopiuj kod aplikacji
COPY ./frontend/ ./

# Buduj aplikację z SSR
RUN npm run build:ssr

# Etap 2: Uruchamianie serwera SSR
FROM node:18 AS server

WORKDIR /app

# Kopiuj wyniki budowania z poprzedniego etapu
COPY --from=builder /app/dist /app/dist

# Kopiuj package.json dla zależności produkcyjnych
COPY ./frontend/package*.json ./

# Instalacja zależności produkcyjnych
RUN npm install --production

# Eksponowanie portu
EXPOSE 4000

# Uruchamianie serwera SSR
CMD ["node", "dist/server/main.js"]
