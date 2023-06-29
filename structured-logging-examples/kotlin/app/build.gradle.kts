
plugins {
    id("org.jetbrains.kotlin.jvm") version "1.8.22"

    application
}

repositories {
    // Use Maven Central for resolving dependencies.
    mavenCentral()
}

dependencies {
    runtimeOnly("ch.qos.logback:logback-classic:1.4.8")
    implementation("org.slf4j:slf4j-api:2.0.7")
    implementation("net.logstash.logback:logstash-logback-encoder:7.4")
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
}

application {
    mainClass.set("com.github.danibix95.logging.example.AppKt")
}

tasks.named<Test>("test") {
    useJUnitPlatform()
}
