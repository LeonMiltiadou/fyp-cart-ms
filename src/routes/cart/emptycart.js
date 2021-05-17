const cartFunction = require('../functions/cart')

const emptyCart =  async (req, res) => {
  
  const cartID = req.params.cartID;  
  const cart = await exportFunctions.cartFunction.handleEmptyCart(cartID);

  //Checks to see that the required object keys exist, otherwise an error occured
  if (cart.error || cart.data || cart.status) {

    //If there was an error emptying cart
    if (cart.error) {

      if (cart.data) {
        res.status(cart.status).json({error : cart.error,data: cart.data});
      } else {
        res.status(cart.status).json({error: cart.error});
      }
    } else {
      //Successfully emptied the cart
      res.status(cart.status).json(cart.data);
    }

  } else {
    const errorMsg = "An unexpected error has occured";
    console.error(errorMsg)
    res.status(500).json({ error: errorMsg })
  }
};

const exportFunctions = { emptyCart, cartFunction };
module.exports = exportFunctions;