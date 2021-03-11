const cartfunction = require('../functions/cart')

module.exports =  async (req, res) => {
  
  const cartID = req.params.cartID;  
  const cart = await cartfunction.handleEmptyCart(cartID);

  res.status(cart.status).json(cart.data);
};