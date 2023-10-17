![License](https://img.shields.io/github/license/armin3731/java_link_shorten)

# Link Shortening

<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="NodeJs" alt="NodeJs" width="200" height="100"/> <img src="https://github.com/devicons/devicon/blob/master/icons/vuetify/vuetify-original.svg" title="Vuetify" alt="Vuetify" width="200" height="100"/>

This Project is a single-page website that can handle shortening long URLs in Javascript.
_*Backend*_ is developed using __node.js__ and __express__. On the other hand, __Vuetify__ handles the _*Frontend*_ side. Other details of the project are listed below:

* Short URL is created using __CRC32__ encoding system.
* Adding new URLs or Delete old ones are handled by __REST__ API.
* Every URL is stored in a __MongoDB__ provided by free Atlas Cloud services.

__*NOTE:* Atlas is NOT available in Iran, So while working with this repo you have to use a VPN connection!__

* This repo is runnable using __Docker__

* Using __Vutify__ as frontend is responsive and graphically acceptable.

## How to Install...

The easiest way to run the code is using _*docker-compose*_

### Step 1
Ensure you have installed __Docker__ and __docker-compose__ on your system.
You can find installation instructions in the links below:
* Docker Installation: https://docs.docker.com/get-docker/
* docker-compose installation: https://docs.docker.com/compose/install/

To check if Docker and docker-compose are correct, you can run the codes below:
```
docker -v
docker-compose -v
```
If there were no errors then everything is working OK.

### Step 2
After you have installed Docker and docker-compose go to the main folder and run the code below:

```
docker-compose up
```
Docker automatically downloads dependencies and runs the server.

### Step 3
You can access the web app through the location below:
```
http://localhost:3000
```
