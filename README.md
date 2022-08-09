# Store Manager

![1659909883196](image/README/1659909883196.png)

## About

Express API developed using MSC (model-service-controller) architecture and implementing unit tests.

The API to be built is a sales management system in dropshipping format in which it will be possible to create, view, delete and update products and sales. using MySQL database for data management.

## Technologies Used

* Node.js
* Express.js
* Docker
* MySql
* Mocha
* Chai
* Sinon
* Express Rescue
* Joi
* DotEnv

## Installation

* *Clone the repository*

```
git@github.com:SamuelS00/Store-Manager.git
```

* *After cloning the respository, install the dependencies:*

```
yarn install
```

 or

```
npm install
```

* *Then proceed with the creation of your .Env file to store your environment variables, this were the ones that i used:*

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=store_manager
PORT=3000
```

### Docker

* *Before you start, your docker-compose needs to be at version 1.29 or higher. See here or in the documentation how to install it. In the first article, you can replace where you are with 1.26.0 with 1.29.2.*

* *to run the application containers use the command below:*

```
docker exec -it store_manager bash
```

### Usage

* *to run the application use the command below:*

```npm
npm start
```

or

```
yarn test
```

* *to run all tests use the command below:*

```
npm test
```
