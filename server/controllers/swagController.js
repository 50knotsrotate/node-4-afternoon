const swag = require('../models/users');

module.exports = {
    read: (req, res, next) => { 
        res.status(200).send(swag)
    }
}