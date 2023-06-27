package com.github.danibix95.logging.example

import com.github.danibix95.logging.example.exceptions.ExampleException
import net.logstash.logback.argument.StructuredArguments
import org.slf4j.Logger
import org.slf4j.LoggerFactory

private val logger: Logger = LoggerFactory.getLogger("main")

fun main() {
    logger.info("hello from Working Software conference")
    logger.error(
        "example of error",
        StructuredArguments.keyValue(
            "cause",
            ExampleException("this error was intended"),
        ),
    )
}
