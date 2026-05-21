# ── Techofy Cloud Backend — Railway Dockerfile ──────────────────────────────
# Node 20 LTS (Alpine = small image, fast deploy)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (layer caching — only re-runs if package.json changes)
COPY package*.json ./
RUN npm install --omit=dev

# Copy source code
COPY . .

# Create upload directory (used by diskStorage since IS_VERCEL = false on Railway)
RUN mkdir -p /tmp/uploads

# Railway injects PORT automatically — default fallback 3000
ENV NODE_ENV=production
EXPOSE 3000

# Health check — Railway uses this to confirm the container is alive
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget -qO- http://localhost:${PORT:-3000}/api/health || exit 1

# Start the server
CMD ["node", "server.js"]
