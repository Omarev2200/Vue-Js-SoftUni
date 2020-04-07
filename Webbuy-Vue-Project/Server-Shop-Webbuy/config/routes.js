const models = require('../models');
const router = require('../routes/');
const utils = require('../utils');
const config = require('../config/config');

module.exports = (app) => {

    app.get('/api/auth', (req, res) => {
        const token = req.cookies[config.development.authCookieName];
        utils.jwt.verifyToken(token)
            .then(({ id }) => models.User.findById(id))
            .then(user => res.send(user))
            .catch(() => res.status(401).send('HELLO!'));
    });

    app.use('/api/user', router.user);

    app.use('/api/products', router.products);
    
    app.use('/api/cart', router.cart);
    app.use('/api/orders', router.orders);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};