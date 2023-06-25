package com.github.danibix95.logging.example

import com.github.danibix95.logging.example.exceptions.ExampleException
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import net.logstash.logback.argument.StructuredArguments

private val logger: Logger = LoggerFactory.getLogger("main")

fun main(): Unit {
    logger.info("hello from Working Software conference")
    logger.error(
        "example of error",
        StructuredArguments.keyValue(
            "cause",
            ExampleException("this error was intended")
        )
    )
}
