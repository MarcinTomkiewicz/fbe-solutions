# Użyj oficjalnego obrazu Node.js jako podstawy
FROM node:18

# Ustaw katalog roboczy
WORKDIR /usr/src/app

# Skopiuj plik package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install --production

# Skopiuj pozostałe pliki projektu
COPY . .

# Expose port
EXPOSE 1337

# Uruchom aplikację Strapi
CMD ["npm", "start"]