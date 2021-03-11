const cartfunction = require('../functions/cart')

module.exports = async (req, res) => {
    const { cartID, lineItemId } = req.params;
    const cart = await cartfunction.handleRemoveFromCart(cartID, lineItemId);

    res.status(cart.status).json(cart.data);
};