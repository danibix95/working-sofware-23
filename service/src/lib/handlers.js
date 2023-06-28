'use strict'

const { randomInt } = require('crypto')
// eslint-disable-next-line no-shadow
const { setTimeout } = require('timers/promises')
const { InvalidQueryError, InvalidBodyError, StorageFailureError } = require('./errors/errors')

async function ok(request, reply) {
  await reply.send({ msg: 'hello' })
}

async function failure(request, reply) {
  await reply.code(500).reply.send({ error: 'this does not work' })
}

async function randomFailure(request, reply) {
  const rand = randomInt(200)

  request.log.debug({ rand }, 'random-failure')

  switch (true) {
  case rand < 30: {
    await reply.code(400).send({ error: 'invalid payload' })
    break
  }
  case rand < 40: {
    await reply.code(401).send({ error: 'unauthorized' })
    break
  }
  case rand < 60: {
    await reply.code(403).send({ error: 'forbidden' })
    break
  }
  case rand < 80: {
    await reply.code(404).send({ error: 'not found' })
    break
  }
  case rand < 90: {
    await reply.code(500).send({ error: 'server error' })
    break
  }
  default:
    await reply.send({ msg: 'it works' })
  }
}

function customFailure(errorCounter) {
  return async(request, reply) => {
    const { log } = request

    try {
      const msg = mayThrowError()
      await reply.send({ msg })
    } catch (error) {
      log.error({ err: error }, 'failed to process request')
      errorCounter.inc({ code: error?.code ?? 'UNKNOWN' })
      await reply.code(400).send({ error: error.msg })
    }
  }
}

async function longOperation(request, reply) {
  const rand = 100 + randomInt(3000)
  await setTimeout(rand)

  await reply.send({ msg: 'delayed response' })
}

function mayThrowError() {
  const rand = randomInt(160)
  switch (true) {
  case rand < 30: {
    throw new InvalidQueryError('invalid query')
  }
  case rand < 70: {
    throw new InvalidBodyError('invalid body')
  }
  case rand < 90: {
    throw new StorageFailureError('failed to save records')
  }
  default:
    return 'computation successful'
  }
}


module.exports = {
  ok,
  longOperation,
  failure,
  randomFailure,
  customFailure,
}
