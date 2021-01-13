FROM node:14.15.4
WORKDIR /armin_app
COPY . /armin_app
RUN npm install
EXPOSE 3000
CMD [ "npm","start" ]