# Use the official Node.js image as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Arguments for Next.js Static Site Generation
# These must be provided in the Spaceship Hyperlift Dashboard as Build Args
ARG NEXT_PUBLIC_MANIFESTO_NOTE_ID
ARG NEXT_PUBLIC_GOVERNANCE_NOTE_ID
ARG NEXT_PUBLIC_INFRASTRUCTURE_NOTE_ID
ARG NEXT_PUBLIC_ANGELS_AI_NOTE_ID
ARG NEXT_PUBLIC_SPECTRUM_NOTE_ID
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ARG NEXT_PUBLIC_STRIPE_ORCHESTRATOR_PRICE_ID
ARG NEXT_PUBLIC_STRIPE_SOVEREIGN_PRICE_ID

# Set ENV during build so Next.js can bake them in
ENV NEXT_PUBLIC_MANIFESTO_NOTE_ID=$NEXT_PUBLIC_MANIFESTO_NOTE_ID
ENV NEXT_PUBLIC_GOVERNANCE_NOTE_ID=$NEXT_PUBLIC_GOVERNANCE_NOTE_ID
ENV NEXT_PUBLIC_INFRASTRUCTURE_NOTE_ID=$NEXT_PUBLIC_INFRASTRUCTURE_NOTE_ID
ENV NEXT_PUBLIC_ANGELS_AI_NOTE_ID=$NEXT_PUBLIC_ANGELS_AI_NOTE_ID
ENV NEXT_PUBLIC_SPECTRUM_NOTE_ID=$NEXT_PUBLIC_SPECTRUM_NOTE_ID
ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_STRIPE_ORCHESTRATOR_PRICE_ID=$NEXT_PUBLIC_STRIPE_ORCHESTRATOR_PRICE_ID
ENV NEXT_PUBLIC_STRIPE_SOVEREIGN_PRICE_ID=$NEXT_PUBLIC_STRIPE_SOVEREIGN_PRICE_ID

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Spaceship Hyperlift defaults to port 8080
EXPOSE 8080

ENV PORT 8080
# set hostname to 0.0.0.0 to allow external connections
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output#standalone
CMD ["node", "server.js"]
