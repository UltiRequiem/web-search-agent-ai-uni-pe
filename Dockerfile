# Use Node.js 20 LTS as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port for Mastra Studio (if needed)
EXPOSE 3000

# Default command - can be overridden
CMD ["node", "dist/index.js"]
