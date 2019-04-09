const users = require('../models/swag');
//user object => {id: intger, username: string, password: string}

var id = 1; //will control the users id

module.exports = {
    login: (req, res, next) => {
        const { session } = req;
        const { username, password } = req.body;

        const user = users.find(user => user.username === username && user.password === password)
        //check the users array for the correct UN/PW combination

        if (user) {
            session.user.username = user.username
            res.status(200).send(session.user)
        } else { 
            res.status(500).send('ACCESS DER-NIED!!!!')
        }
    },
    
    register: (req, res, next) => {
        const { session } = req
        const { username, password } = req.body
        
        users.push({
            id,username, password
        })
        id++;

        res.status(200).send(session.user)

    },
    signout: (req, res, next) => { 
        req.session.destroy()
        res.status(200).send(req.session)

    },
    getUser: (req, res, next) => { 
        const { session } = req
        res.status(200).send(session.user)

    }
}