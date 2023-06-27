'use strict'

const errorCodes = require('./errorCodes')

class CustomError extends Error {
  constructor(msg, code, explanation, cause) {
    super(msg)
    this.code = code
    this.explanation = explanation
    this.cause = cause
  }
}

class ExampleError extends CustomError {
  constructor(msg, cause) {
    super(
      msg,
      errorCodes.EX_JSC_E0001.code,
      errorCodes.EX_JSC_E0001.explanation,
      cause
    )
  }
}

module.exports = {
  CustomError,
  ExampleError
}