ARG node_version=14.15.4
ARG node_image=node:${node_version}-alpine

# STAGE 1
FROM $node_image as builder

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app/

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --no-progress

COPY next.config.js ./
COPY tsconfig.json ./
COPY next-env.d.ts ./
COPY public ./public/
COPY src ./src/

RUN yarn build

# STAGE 2
FROM $node_image as production

WORKDIR /app/

COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --frozen-lockfile --production=true --no-progress --ignore-scripts

# STAGE 3
FROM $node_image

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

WORKDIR /app/

COPY --from=production /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD npm run start
