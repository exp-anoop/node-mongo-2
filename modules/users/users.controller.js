const _ = require('lodash');
const { User } = require('./../../models/user');


const signup = (req, res) => {

	const body = _.pick(req.body, ['name', 'email', 'password']);

	const user = new User(body);

	user.save()
		.then((user) => res.return(user))
		.catch((e) => res.status(400).return(e));
};


const me = (req, res) => {
	if (!req.user) return res.status(404).message('user-not-found').return();
	return res.return(req.user);
}

module.exports = { signup, me };
