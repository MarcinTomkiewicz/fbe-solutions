# Etap 1: Budowanie aplikacji Angular
FROM node:18 AS builder

WORKDIR /app

# Kopiowanie plików konfiguracyjnych
COPY package*.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie reszty kodu aplikacji
COPY . .

# Budowanie aplikacji Angular w trybie produkcyjnym z SSR
RUN npm run build:ssr

# Etap 2: Serwowanie aplikacji Angular za pomocą Nginx
FROM nginx:latest

# Usuń domyślną stronę Nginx
RUN rm -rf /usr/share/nginx/html/*

# Kopiowanie zbudowanej aplikacji Angular (dla przeglądarki) do katalogu nginx
COPY --from=builder /app/dist/fbe-solutions/browser/ /usr/share/nginx/html/

# Skopiuj plik konfiguracyjny nginx, jeśli go posiadasz
COPY ../nginx.conf /etc/nginx/nginx.conf

# Uruchom nginx w trybie foreground (żeby kontener się nie zamknął)
CMD ["nginx", "-g", "daemon off;"]
