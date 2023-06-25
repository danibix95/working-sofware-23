'use strict'

const pino = require('pino')

class ExampleError extends Error {
  constructor(msg) {
    super(msg)
    this.cause = 'explaining the issue'
  }
}

function main() {
  const logger = pino({ level: 'info' })

  logger.info('hello from Working Software conference')
  logger.error(
    {
      err: new ExampleError('this error was intended')
    },
    'example of error',
  )
}

main()