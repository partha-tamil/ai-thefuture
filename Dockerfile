# Stage 1: Build the React application
# Use a Node.js base image for building the React app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
# This is done separately to leverage Docker's layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app for production
# This creates the optimized static files in the 'build' directory
RUN npm run build

# Stage 2: Serve the React application with Nginx
# Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# Copy the Nginx default configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove the default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from the 'build' stage to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80, which Nginx will listen on
EXPOSE 80

# Command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
