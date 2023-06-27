package com.github.danibix95.logging.example.exceptions

class ExampleException(message: String, cause: Throwable? = null) : CustomException(message, cause) {
    override val code: String
        get() = ErrorCode.EX_KTL_E0001.name

    override fun toString(): String {
        return "$code: ${ErrorCode.EX_KTL_E0001.explanation} | ${super.cause}"
    }
}
