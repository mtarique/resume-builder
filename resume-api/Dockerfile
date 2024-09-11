# Use the Node version you need
FROM node:14

# Set working directory in the container
WORKDIR /var/www/html

# Copy package.json (if needed later for dependencies)
COPY package*.json ./

# Install dependencies (if you have them)
RUN npm install

# Copy the rest of your project files
COPY . .

# Expose the port your app uses (if needed)
EXPOSE 3000

# Command to run your app
# CMD ["bash"]
CMD ["npm", "start"]