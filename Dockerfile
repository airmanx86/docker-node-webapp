# DOCKER-VERSION 1.1.2
FROM    node:latest
MAINTAINER Arthur Ho

# Build dependencies
ADD src/ ./src
RUN cd /src; npm install
EXPOSE 8080
CMD ["node", "/src/app.js"]