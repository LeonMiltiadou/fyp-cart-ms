const cartfunction = require('../functions/cart')

module.exports = async (req, res) => {
  const {cartID, productId, quantity} = req.body;
  const cart = await cartfunction.handleAddToCart(cartID, productId, quantity)

  res.status(cart.status).json(cart.data);
};