const cartFunction = require('../functions/cart')

const removeFromCart = async (req, res) => {
    const { cartID, lineItemId } = req.params;
    const cart = await exportFunctions.cartFunction.handleRemoveFromCart(cartID, lineItemId);

    //Checks to see that the required object keys exist, otherwise an error occured
    if (cart.error || cart.data || cart.status) {

        //If there was an error removing an item from the cart
        if (cart.error) {

            if (cart.data) {
                res.status(cart.status).json({ error: cart.error, data: cart.data });
            } else {
                res.status(cart.status).json({ error: cart.error });
            }
        } else {
            //Successfully removed an item from the cart
            res.status(cart.status).json(cart.data);
        }

    } else {
        const errorMsg = "An unexpected error has occured";
        console.error(errorMsg)
        res.status(500).json({ error: errorMsg })
    }
};

const exportFunctions = { removeFromCart, cartFunction };
module.exports = exportFunctions;