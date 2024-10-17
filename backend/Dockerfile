# 1. Use the official Node.js image
FROM node:18-alpine

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy only package.json and package-lock.json to the container
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the Strapi port (default is 1337)
EXPOSE 1337

# 7. Start the Strapi application
CMD ["npm", "run", "develop"]