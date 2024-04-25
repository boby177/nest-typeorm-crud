FROM node:16

# Create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY packege*.json ./

RUN yarn

# Bundle app source
COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start", "start:prod"]