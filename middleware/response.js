const status = require('./../config/http.status.json');


const response = (req, res, next) => {
    res.message = (message) => {
        if (typeof message === 'string') {
            let i18n = req.app.get('i18n');
            res.responseMessage = i18n.t(message);
        }
        return res;
    };

    res.return = (data) => {
        message = res.responseMessage || status[res.statusCode];
        res.send({ message, status: res.statusCode, data });
    };
    next();
}

module.exports = { response };
