# Étape 1 : Builder l'application
FROM node:18-alpine AS builder

WORKDIR /app

# Copier package.json et lockfile
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier tout le projet
COPY . .

# Builder l'application
RUN npm run build

# Étape 2 : Runner en production
FROM node:18-alpine AS runner

WORKDIR /app

# Copier uniquement les fichiers nécessaires
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Installer uniquement les dépendances prod
RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]
