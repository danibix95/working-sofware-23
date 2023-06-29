'use strict'

module.exports = (prometheusClient) => {
  const errorCounter = new prometheusClient.Counter({
    name: 'simple_custom_error_count',
    help: 'count how many custom error are raised while the service is running',
    labelNames: ['code'],
  })

  return {
    errorCounter,
  }
}
