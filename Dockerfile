# Use an official Node.js runtime as a base image
FROM node:23-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire application
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight Node.js runtime to serve the built app
FROM node:23-alpine AS runner
WORKDIR /app

# Copy built files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose port
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
