"use strict";

var cartroutes = require('express').Router();

var addToCart = require('./addtocart');

var fetchcart = require('./fetchcart');

var createcart = require('./createcart');

var emptycart = require('./emptycart');

var removefromcart = require('./removefromcart');

var updatecartqty = require('./updatecartqty');

cartroutes.post('/addto', addToCart);
cartroutes.get('/fetch/:cartID', fetchcart);
cartroutes.get('/create', createcart);
cartroutes["delete"]('/removefrom/:cartID/:lineItemId', removefromcart);
cartroutes["delete"]('/empty/:cartID', emptycart);
cartroutes.put('/updateqty', updatecartqty);
module.exports = cartroutes;