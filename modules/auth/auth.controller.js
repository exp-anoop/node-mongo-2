const _ = require('lodash');
const { User } = require('./../../models/user');


const login = (req, res) => {
    const body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken()
            .then((token) => res.header('x-auth', token).return(user))
            .catch((e) => Promise.reject(e));
    }).catch((e) => res.status(401).message('user-invalid-credentials').return(e));
}


const logout = (req, res) => {
    req.user.removeToken(req.token)
        .then(() => res.status(200).return())
        .catch((e) => res.status(400).return(e));
}

module.exports = { login, logout };
