# Install dependencies and rebuild the source code only when neededonly
FROM node:18.12.1-alpine3.17 AS builder
ENV NODE_ENV production

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY . .

RUN echo 'YARN VERSION IN BUILDER: ' && yarn --version
# Note yarn rebuild - this is to let yarn rebuild binaries
RUN yarn rebuild && yarn build

# Production image, copy all the files and run next
FROM node:18.12.1-alpine3.17 AS runner

ARG WEB_PORT=3042

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

ENV NODE_ENV production
WORKDIR /app

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Note yarn rebuild again - this is to let yarn rebuild binaries in the "runner" stage of the Dockerfile
# We also have to remove unplugged, so that rebuilding happens and replaces the old binaries
RUN rm -rf /.yarn/unplugged && yarn rebuild
RUN chown -R nextjs:nodejs /app
RUN echo "YARN VERSION IN RUNNER: " && yarn --version

USER nextjs

EXPOSE ${WEB_PORT}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]