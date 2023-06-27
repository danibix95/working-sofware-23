'use strict'

const pino = require('pino')

const { ExampleError } = require('./errors/errors')

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