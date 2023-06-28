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

class InvalidQueryError extends CustomError {
  constructor(msg, cause) {
    super(
      msg,
      errorCodes.WK_DEM_E0001.code,
      errorCodes.WK_DEM_E0001.explanation,
      cause
    )
  }
}

class InvalidBodyError extends CustomError {
  constructor(msg, cause) {
    super(
      msg,
      errorCodes.WK_DEM_E0002.code,
      errorCodes.WK_DEM_E0002.explanation,
      cause
    )
  }
}

class StorageFailureError extends CustomError {
  constructor(msg, cause) {
    super(
      msg,
      errorCodes.WK_DEM_E1001.code,
      errorCodes.WK_DEM_E1001.explanation,
      cause
    )
  }
}

module.exports = {
  CustomError,
  InvalidQueryError,
  InvalidBodyError,
  StorageFailureError,
}
