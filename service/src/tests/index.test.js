'use strict'

const t = require('tap')
const lc39 = require('@mia-platform/lc39')

async function setupFastify(envVariables) {
  const fastify = await lc39('./index.js', {
    logLevel: 'silent',
    envVariables,
  })
  return fastify
}

t.test('mia_template_service_name_placeholder', async t => {
  // silent => trace for enabliing logs
  const fastify = await setupFastify({
    USERID_HEADER_KEY: 'userid',
    GROUPS_HEADER_KEY: 'groups',
    CLIENTTYPE_HEADER_KEY: 'clienttype',
    BACKOFFICE_HEADER_KEY: 'backoffice',
    MICROSERVICE_GATEWAY_SERVICE_NAME: 'microservice-gateway.example.org',
  })

  t.teardown(async() => {
    await fastify.close()
  })

  /*
   * Insert your tests here.
   */

  t.end()
})
