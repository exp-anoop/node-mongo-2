const express = require('express');
var {signup, me} = require('./users.controller');

var router = express.Router();

var routes = (authenticate) => {

	router.route("/")
		.post(signup)

	router.route("/me")
		.get(authenticate, me);

	return router;
}

module.exports = { routes, path: 'users'};
