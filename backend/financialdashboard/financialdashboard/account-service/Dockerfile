# --------------
# Dockerfile for account-service
#---------------
# BUILD stage
#--

#base image
FROM gradle:8-jdk17-alpine AS builder

# Copy the application filess from the host machine to the image filesystem
COPY --chown=gradle:gradle . /home/gradle/src

# Set the working directory within the image, for executing future commands
WORKDIR /home/gradle/src

RUN ls -la /home/gradle/src

# Run gradle build within the container - NOT on the host machine
RUN gradle build -x test

#package stage
FROM openjdk:17-jdk-alpine

RUN mkdir /app

COPY --from=builder /home/gradle/src/build/libs/*.jar /app/account-service.jar

#port
EXPOSE 8083

ENTRYPOINT ["java","-jar","/app/account-service.jar"]