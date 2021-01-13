# Full Stack Tech Assessment
This project has been done for Behvaran System Pasargad Tech Solutions Co.

## Task Details
This Project is a single-page website that can handle shortening long URLs.
It is created using __node.js__ and __express__ API at the backend side. On the other hand, __Vue.js__ handles the frontend side. Other details of the project are listed below:

* Short URL is created using CRC32 encoding system.
* Adding new URLs or Delete old ones are handled by REST API.
* Every URL is stored in __MongoDB__ provided by free Atlas Cloud services.

__*NOTE:* Atlas is NOT available in Iran, So while working with this repo you have to use a VPN connection!__

* This repo is runnable using __Docker__

* Using __Vutify__ frontend is responsive and graphically acceptable.

## How to Install...

The easiest way to run the code is using _*docker-compose*_

### Step 1
Make sure you have installed __Docker__ and __docker-compose__ on your PC.
You can find installation instructions on links below:
* Docker Installation: https://docs.docker.com/get-docker/
* docker-compose installation: https://docs.docker.com/compose/install/

To check if Docker and docker-compose correctly, you can run codes below:
```
docker -v
docker-compose -v
```
If there were no errors then everything is working well.

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
