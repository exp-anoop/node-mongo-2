## API

ReST API's for stratup project.

### Technologies used
* Node 8.x
* Express 4.15.4
* MongoDB 3.4.x

## Packages and tools used
* bcryptjs
* jsonwebtoken
* helmet
* lodash
* winston
* eslint (should be installed globally)
* mocha
* supertest
* apidoc (should be installed globally)

## Development

* Clone the repo 
```sh
git clone https://github.com/exp-anoop/node-mongo-2.git seed
```
* Install dependencies
```sh
cd seed && yarn install
```
* For starting the application use the following script. (will check the code quality before starting the application).
```sh
yarn run start
```
* To run the test cases and genarate API documentation run the following command.
```sh
yarn run build
```

## Core modifications

### Added two new functions to response object
1. res.return() - This function is a replacement for res.send(), using this function we include additional information to the response such as message, status and data.
  * Example ```res.return({name: "Anoop"}) // Output {"message":"OK","status":200, data: {name: "Anoop"}}```

2. res.message() - To send custom message along with the response, by default it will take standard http message.
  * Example 1: ```res.status(500).message("Some thing went wrong with the server").return() // Response {"message":"Some thing went wrong with the server","status":500}```
  * Example 2: ```res.status(500).return() // Response {"message":"Internal Server Error","status":500}```