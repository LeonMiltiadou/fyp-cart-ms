"use strict";

var routes = require('express').Router();

var cartroutes = require('./cart');

routes.use('/cart', cartroutes);
module.exports = routes;