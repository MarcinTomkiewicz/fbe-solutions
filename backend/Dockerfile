# 1. Use the official Node.js image
FROM node:20-alpine

# 2. Set the working directory in the container
WORKDIR /app

COPY package*.json ./

# Instaluj sharp dla systemu Linux
RUN npm install sharp --platform=linuxmusl --arch=x64

# Zainstaluj pozostałe zależności
RUN npm install

# Skopiuj resztę plików
COPY . .

# Uruchom aplikację
CMD ["npm", "run"]