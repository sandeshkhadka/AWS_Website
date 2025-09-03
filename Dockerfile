# 1. Build Stage
FROM node:20-alpine AS builder

WORKDIR /app



# Install dependencies first (for better caching)
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./


# Install deps
RUN npm install -g pnpm && pnpm install

# Copy source coddes
COPY . .

# Build the NextJS app
RUN pnpm run build


#---------------------

# 2. Production Stage
FROM node:20-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production
ENV PORT 3000

# Copy only necessary files from builder
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Start NextJS app
CMD ["npm", "start"]
