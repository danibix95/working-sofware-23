FROM node:20.3.1-alpine as build

ARG COMMIT_SHA=<not-specified>
ENV NODE_ENV=production

WORKDIR /build-dir

COPY package.json .
COPY package-lock.json .

RUN npm ci --omit=dev

COPY . .

RUN echo "example-service: $COMMIT_SHA" >> ./commit.sha

########################################################################################################################

FROM node:20.3.1-alpine

RUN apk add --no-cache tini

LABEL maintainer="dani" \
      name="example-service" \
      description="example of service exposing metrics" \
      eu.mia-platform.url="https://www.mia-platform.eu" \
      eu.mia-platform.version="0.1.0"

ENV NODE_ENV=production
ENV LOG_LEVEL=info
ENV SERVICE_PREFIX=/
ENV HTTP_PORT=3000

WORKDIR /home/node/app

COPY --from=build /build-dir ./

USER node

ENTRYPOINT ["/sbin/tini", "--"]

CMD ./node_modules/.bin/lc39 ./index.js --port=${HTTP_PORT} --log-level=${LOG_LEVEL}