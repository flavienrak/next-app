# Étape 1 : Builder
FROM node:18-bullseye AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Étape 2 : Runner en production
FROM node:18-bullseye AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]
