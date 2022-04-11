![License](https://img.shields.io/github/license/armin3731/java_link_shorten)
# Javascript Full-Stack Link Shortening
This Project is a single-page website that can handle shortening long URLs in Javascript.
_*Backend*_ is developed using __node.js__ and __express__ API. On the other hand, __Vue.js__ handles the _*Frontend*_ side. Other details of the project are listed below:

* Short URL is created using __CRC32__ encoding system.
* Adding new URLs or Delete old ones are handled by __REST__ API.
* Every URL is stored in a __MongoDB__ provided by free Atlas Cloud services.

__*NOTE:* Atlas is NOT available in Iran, So while working with this repo you have to use a VPN connection!__

* This repo is runnable using __Docker__

* Using __Vutify__ as frontend is responsive and graphically acceptable.

## How to Install...

The easiest way to run the code is using _*docker-compose*_

### Step 1
Make sure you have installed __Docker__ and __docker-compose__ on your system.
You can find installation instructions in the links below:
* Docker Installation: https://docs.docker.com/get-docker/
* docker-compose installation: https://docs.docker.com/compose/install/

To check if Docker and docker-compose correctly, you can run codes below:
```
docker -v
docker-compose -v
```
If there were no errors then everything is working OK.

### Step 2
After you installed Docker and docker-compose go to the web-app folder and run the code below:

```
docker-compose up
```
Docker automatically downloads dependencies and runs the web-app server.

### Step 3
In the final step, you can access the web-app through the location below:
```
http://localhost:3000
```
