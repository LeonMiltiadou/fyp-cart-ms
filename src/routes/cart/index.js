const cartroutes = require('express').Router();

const addToCart = require('./addtocart');
const fetchcart = require('./fetchcart');
const createcart = require('./createcart');
const emptycart = require('./emptycart');
const removefromcart = require('./removefromcart');
const updatecartqty = require('./updatecartqty');

cartroutes.post('/addto', addToCart);
cartroutes.get('/fetch/:cartID', fetchcart);
cartroutes.get('/create', createcart);
cartroutes.delete('/removefrom/:cartID/:lineItemId',removefromcart);
cartroutes.delete('/empty/:cartID',emptycart);
cartroutes.put('/updateqty',updatecartqty);

module.exports = cartroutes;