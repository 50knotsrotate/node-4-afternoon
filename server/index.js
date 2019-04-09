require('dotenv').config()
const express = require('express');
const app = express()
const session = require('express-session');
const swagController = require('./controllers/swagController');
const authController = require('./controllers/authController');
const cartController = require('./controllers/cartController');
const searchController = require('./controllers/searchController')
const { SERVER_PORT, SESSION_SECRET } = process.env
const { checkSession } = require('./middlewares/checkForSessions');

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false, 
        saveUninitialized: false
    })
    )
    
app.use(checkSession)
app.use(express.static(`${__dirname}/../build`));

app.post('/api/cart/checkout', cartController.checkout)
app.delete('/api/cart/:id', cartController.delete)
app.post('/api/cart/:id', cartController.add)

app.get('/api/swag', swagController.read)

app.post('/api/login', authController.login)
app.post('/api/register', authController.register)
app.post('/api/signout', authController.signout)
app.get('/api/user', authController.getUser)
app.get('/api/search', searchController.search)

app.listen(SERVER_PORT, () => { 
    console.log(`server has started on port ${SERVER_PORT}`)
})
