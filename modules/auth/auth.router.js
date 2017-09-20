const express = require('express');
var {login, logout} = require('./auth.controller');

var router = express.Router();

var routes = (authenticate) => {

	router.route("/")
		.post(login)
		.delete(authenticate, logout);

	return router;
}

module.exports = { routes, path: 'auth' };
