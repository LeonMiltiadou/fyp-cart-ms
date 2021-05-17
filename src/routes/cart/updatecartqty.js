const cartFunction = require('../functions/cart')

const updateCartQty = async (req, res) => {
    const { cartID, lineItemId, quantity } = req.body;

    const cart = await exportFunctions.cartFunction.handleUpdateCartQty(cartID, lineItemId, quantity);

    //Checks to see that the required object keys exist, otherwise an error occured
    if (cart.error || cart.data || cart.status) {

        //If there was an error updating the item quantity in the cart
        if (cart.error) {

            if (cart.data) {
                res.status(cart.status).json({ error: cart.error, data: cart.data });
            } else {
                res.status(cart.status).json({ error: cart.error });
            }
        } else {
            //Successfully updated the item quantity in the cart 
            res.status(cart.status).json(cart.data);
        }

    } else {
        const errorMsg = "An unexpected error has occured";
        console.error(errorMsg)
        res.status(500).json({ error: errorMsg })
    }
};

const exportFunctions = { updateCartQty, cartFunction };
module.exports = exportFunctions;