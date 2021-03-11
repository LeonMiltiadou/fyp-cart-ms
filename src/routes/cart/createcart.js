const cartfunction = require('../functions/cart')

module.exports = async (req, res) => {
  const cart = await cartfunction.createCart();

  res.status(cart.status).json(cart.data); // need to edit the return in functions

};