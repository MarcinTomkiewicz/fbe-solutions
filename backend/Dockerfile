# Użyj oficjalnego obrazu Node.js jako podstawy
FROM node:18

# Ustaw katalog roboczy
WORKDIR /usr/src/app

# Skopiuj plik package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj pozostałe pliki projektu
COPY . .

# Buduj aplikację Strapi
RUN npm run build  # Dodaj ten krok do budowy aplikacji

# Expose port
EXPOSE 1337

# Uruchom aplikację Strapi
CMD ["npm", "start"]