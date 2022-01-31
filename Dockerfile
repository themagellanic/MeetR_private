FROM openjdk:8
EXPOSE 8081
ADD target/meeting-room.jar meeting-room.jar
ENTRYPOINT ["java","-jar","/meeting-room.jar"]