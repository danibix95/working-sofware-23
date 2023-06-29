
'use strict'

const customService = require('@mia-platform/custom-plugin-lib')()

const {
  ok,
  longOperation,
  randomFailure,
  customFailure,
  failure,
} = require('./lib/handlers')

const getMetrics = require('./lib/metrics')

module.exports = customService(async function index(service) {
  const { customMetrics } = service
  service.addRawCustomPlugin('GET', '/ok', ok)
  service.addRawCustomPlugin('GET', '/long-operation', longOperation)

  service.addRawCustomPlugin('GET', '/failure', failure)
  service.addRawCustomPlugin('GET', '/random-failure', randomFailure)
  service.addRawCustomPlugin('GET', '/custom-failure', customFailure(customMetrics.errorCounter))
})

module.exports.getMetrics = getMetrics
