# 1. Use the official Node.js image
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Build the Angular application (production version)
RUN npm run build

# 7. Use a server to serve the files (e.g., http-server)
RUN npm install -g http-server

# 8. Expose the port (default 8080 or 4200)
EXPOSE 8080

# 9. Run the server for the built application
CMD ["http-server", "dist"]