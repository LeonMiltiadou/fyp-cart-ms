const routes = require('express').Router();
const cartroutes = require('./cart');

routes.use('/cart', cartroutes);

module.exports = routes;