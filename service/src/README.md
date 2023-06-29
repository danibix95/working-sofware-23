# Simple Service

This is a simple NodeJS service to show how metrics can employed to collect statistics about your code.

## How to run

    npm ci
    npm run start:local | npx pino-pretty -t

## Create and run Dockerimage

    docker build -t simple .
    docker run --rm --name simple --env-file=default.env simple | npx pino-pretty -t