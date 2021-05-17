const cartroutes = require('express').Router();

const { addToCart } = require('./addtocart');
const { fetchCart } = require('./fetchcart');
const { createCart } = require('./createcart');
const { emptyCart } = require('./emptycart');
const { removeFromCart } = require('./removefromcart');
const { updateCartQty } = require('./updatecartqty');

cartroutes.post('/addto', addToCart);
cartroutes.get('/fetch/:cartID', fetchCart);
cartroutes.get('/create', createCart);
cartroutes.delete('/removefrom/:cartID/:lineItemId', removeFromCart);
cartroutes.delete('/empty/:cartID', emptyCart);
cartroutes.put('/updateqty', updateCartQty);

module.exports = cartroutes;