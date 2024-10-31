# Użyj oficjalnego obrazu Node.js jako podstawy
FROM node:18 AS build

# Ustaw katalog roboczy
WORKDIR /usr/src/app

# Skopiuj plik package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj pozostałe pliki projektu
COPY . .

# Zbuduj aplikację Angular
RUN npm run build --prod

# Użyj oficjalnego serwera Nginx do serwowania aplikacji
FROM nginx:alpine

# Skopiuj zbudowaną aplikację do katalogu serwera Nginx
COPY --from=build /usr/src/app/dist/fbe-solutions /usr/share/nginx/html

# Expose port
EXPOSE 80

# Uruchom serwer Nginx
CMD ["nginx", "-g", "daemon off;"]