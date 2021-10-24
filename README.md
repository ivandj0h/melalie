# Melalie Application 👋


<br />

## Getting Started


[![Build Status](https://travis-ci.org/iolufemi/Express-REST-API-Generator.svg?branch=dev)](https://travis-ci.org/iolufemi/Express-REST-API-Generator)  [![codecov](https://codecov.io/gh/iolufemi/Express-REST-API-Generator/branch/master/graph/badge.svg)](https://codecov.io/gh/iolufemi/Express-REST-API-Generator) [![Documentation Status](https://readthedocs.org/projects/api-template/badge/?version=latest)](http://api-template.readthedocs.io/en/latest/?badge=latest)

`Melalie Application` is a backend service (API and database) for a food delivery app and you can find this application online through this link below :
```
https://nginx1.ivandjoh.online/api/
```
to test the <b>Endpoint</b> Online, just navigate to this <b>Documentation</b> :

```
https://nginx1.ivandjoh.online/api/docs/
```


This Application was Developed using several stacks such as :

* [NodeJS](https://nodejs.org) ( As a backend language )

* [ExpressJS](https://expressjs.com) ( As a Framework for NodeJS )
* [MongoDB](https://mongodb.com) ( As a NoSQL Database )
* [Swagger](https://swagger.io) ( As a API Documentation )
* [Docker](https://www.docker.com) ( As a Containerization )

<hr />
<br />

## Installation
To start this project, just clone the repository from GitHub and install the dependencies.

```
$ git clone https://github.com/ivandi1980/melalie.git 
```
If you download directly from git, the you've to extract using tools like <b>7zip</b> or <b>Winrar</b> for windows user, but if you're using Linux then you just type :
```bash
unzip <zipped_file.zip> -d <unzipped_directory>
```
<hr />
<br />

## Run the Application

Before Running the Application, please make sure to import the databases from Datasets folder which is already been modified to avoid any errors when interract with Database into your MongoDB Database.

There are 2 ways to Run this application :

1. <b>Run within Docker Container</b>

To run this application, please make sure you already have :
- Docker Installed on your machine
- Nodejs Installed on your machine
- MongoDB Installed on your machine
- Rest Client for Api testing ( Optional )

if it so, the simply follow the steps below :


* Run Docker Build
```
docker build -t melalie:1.0.0 .
```
* Run The Container
```
docker run -p 1337:8080 melalie:1.0.0
```
* stop the Container
```
docker stop <container_id>
```

Here are several Docker Commands (additional)
```
docker images
(to see the images on your machine)

docker ps
(to see running container on your machine)
```

to test the <b>Endpoint</b> on your <b>Local</b> Machine, just navigate to this <b>Documentation</b> :

<b>Use Docker</b>
```
http://localhost:1337/docs
```

<b>Not use Docker</b>
```
http://localhost:8080/docs
```


2. <b>Run without Docker Container</b>

If you want to run without using Docker Container, just follow these steps below :
```
$ cd melalie
```
```
$ npm install
```
```
$ npm run dev (development)
```
```
$ npm start (production)
```
### Author

**Ivandjoh**

<a href="https://linkedin.com/in/ivandjoh" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ivandjoh" height="20" width="20" /></a>
<a href="https://instagram.com/ivandjoh" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="ivandjoh" height="20" width="30" /></a>