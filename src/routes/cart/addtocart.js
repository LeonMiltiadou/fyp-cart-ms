const cartFunction = require('../functions/cart');

const addToCart = async (req, res) => {
  const { cartID, productId, quantity } = req.body;
  let cart = await exportFunctions.cartFunction.handleAddToCart(cartID, productId, quantity)

  //Checks to see that the required object keys exist, otherwise an error occured
  if (cart.error || cart.data || cart.status) {

    //If there was an error adding to the cart
    if (cart.error) {

      if (cart.data) {
        res.status(cart.status).json({error : cart.error,data: cart.data});
      } else {
        res.status(cart.status).json({error: cart.error});
      }
    } else {
      //Successfully added to cart
      res.status(cart.status).json(cart.data);
    }

  } else {
    const errorMsg = "An unexpected error has occured";
    console.error(errorMsg)
    res.status(500).json({ error: errorMsg })
  }
};

const exportFunctions = { addToCart, cartFunction };
module.exports = exportFunctions;