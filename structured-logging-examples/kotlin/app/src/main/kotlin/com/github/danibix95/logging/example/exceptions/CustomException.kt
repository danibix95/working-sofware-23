package com.github.danibix95.logging.example.exceptions

abstract class CustomException(message: String, cause: Throwable? = null) : Exception(message, cause) {
    abstract val code: String
}
