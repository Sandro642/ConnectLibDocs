---
sidebar_position: 1
---

# Importation

Here you can see the different ways to import the Java library.

To import the library, you have two solutions. Either with Gradle or Maven, or you import the library via the Jar.

You can download the jar of the latest version or copy the provided example to import the library with Gradle or Maven.
Here [download.connectlib.xyz](https://connectlib.xyz#downloads)

---

Importation with Gradle or Maven 

## Maven
```
<repository>
    <id>connectlib</id>
    <url>https://sandro642.github.io/connectlib/jar</url>
</repository>

<dependency>
    <groupId>fr.sandro642.github</groupId>
    <artifactId>ConnectLib</artifactId>
    <version>0.3.5-STABLE</version>

```

## Gradle
```
repositories {
    mavenCentral()

    maven {
        url 'https://sandro642.github.io/connectlib/jar'
    }
}

dependencies {
    testImplementation platform('org.junit:junit-bom:5.10.0')
    testImplementation 'org.junit.jupiter:junit-jupiter'
    
    implementation 'fr.sandro642.github:ConnectLib:0.3.5-STABLE'
}
```
