const cartfunction = require('../functions/cart')

module.exports = async (req, res) => {
    const { cartID, lineItemId, quantity } = req.body;

    const cart = await cartfunction.handleUpdateCartQty(cartID, lineItemId, quantity);

    res.status(cart.status).json(cart.data);
};