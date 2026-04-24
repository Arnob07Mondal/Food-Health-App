# Use Node.js
FROM node:18

# App directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 8080

# Start app
CMD ["npm", "start"]
