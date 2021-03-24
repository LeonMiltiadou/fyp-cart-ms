import axios from 'axios';
require('dotenv').config()


const url = process.env.COMMERCEBASEURL + "/carts/";

const cartAPI = axios.create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY, "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

module.exports = {
  /**
   * Adds a product to the current cart in session
   * https://commercejs.com/docs/sdk/cart/#add-to-cart
   *
   * @param {string} productId The ID of the product being added
   * @param {number} quantity The quantity of the product being added
   * 
   * @returns cart
   */
  handleAddToCart: async (cartID, productId, quantity) => {
    return await cartAPI.post(cartID, { id: productId, quantity: quantity }).then((cart) => {
      return { data: cart.data, status: cart.status };
    }).catch((error) => {

      const baseErrorMsg = "There was an error while adding the item to the cart";

      if (error.response) {
        console.error(baseErrorMsg, error);
        return { error: baseErrorMsg, data: error.response.data, status: error.response.status };
      } else if (error.request) {
        console.error(baseErrorMsg + " - The request was made but no response was received", error);
        return { error: baseErrorMsg + " - The request was made but no response was received", status: 502 };
      } else {
        console.error(baseErrorMsg + " - The Request was not made", error);
        return { error: baseErrorMsg + " - The Request was not made", data: error.message, status: 500 };

      }
    });
  },

  /**
   * Updates line_items in cart
   * https://commercejs.com/docs/sdk/cart/#update-cart
   *
   * @param {string} lineItemId ID of the cart line item being updated
   * @param {number} quantity New line item quantity to update
   */
  handleUpdateCartQty: async (cartID, lineItemId, quantity) => {
    return await cartAPI.put(cartID + "/items/" + lineItemId, { quantity: quantity }).then((cart) => {
      return { data: cart.data, status: cart.status };
    }).catch((error) => {

      const baseErrorMsg = "There was an error while updating the item quantity in the cart";

      if (error.response) {
        console.error(baseErrorMsg, error);
        return { error: baseErrorMsg, data: error.response.data, status: error.response.status };
      } else if (error.request) {
        console.error(baseErrorMsg + " - The request was made but no response was received", error);
        return { error: baseErrorMsg + " - The request was made but no response was received", status: 502 };
      } else {
        console.error(baseErrorMsg + " - The Request was not made", error);
        return { error: baseErrorMsg + " - The Request was not made", data: error.message, status: 500 };

      }
    });
  },

  /**
   * Removes line item from cart
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   *
   * @param {string} lineItemId ID of the line item being removed
   */
  handleRemoveFromCart: async (cartID, lineItemId) => {
    return await cartAPI.delete(cartID + "/items/" + lineItemId).then((cart) => {
      return { data: cart.data, status: cart.status };
    }).catch((error) => {

      const baseErrorMsg = "There was an error while removing the item from the cart";

      if (error.response) {
        console.error(baseErrorMsg, error);
        return { error: baseErrorMsg, data: error.response.data, status: error.response.status };
      } else if (error.request) {
        console.error(baseErrorMsg + " - The request was made but no response was received", error);
        return { error: baseErrorMsg + " - The request was made but no response was received", status: 502 };
      } else {
        console.error(baseErrorMsg + " - The Request was not made", error);
        return { error: baseErrorMsg + " - The Request was not made", data: error.message, status: 500 };

      }
    });
  },

  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */
  handleEmptyCart: async (cartID) => {
    return await cartAPI.delete(cartID + "/items").then((cart) => {
      return { data: cart.data, status: cart.status };
    }).catch((error) => {

      const baseErrorMsg = "There was an error while emptying the cart";

      if (error.response) {
        console.error(baseErrorMsg, error);
        return { error: baseErrorMsg, data: error.response.data, status: error.response.status };
      } else if (error.request) {
        console.error(baseErrorMsg + " - The request was made but no response was received", error);
        return { error: baseErrorMsg + " - The request was made but no response was received", status: 502 };
      } else {
        console.error(baseErrorMsg + " - The Request was not made", error);
        return { error: baseErrorMsg + " - The Request was not made", data: error.message, status: 500 };

      }
    });
  },

  /**
  * Retrieve the current cart or create one if one does not exist
  * https://commercejs.com/docs/sdk/cart
  */
  handleFetchCart: async (cartID) => {
    return await cartAPI.get(cartID)
      .then(function (cart) {
        return { data: cart.data, status: cart.status };
      })
      .catch(function (error) {

        const baseErrorMsg = "There was an error while fetching the cart";

        if (error.response) {
          console.error(baseErrorMsg, error);
          return { error: baseErrorMsg, data: error.response.data, status: error.response.status };
        } else if (error.request) {
          console.error(baseErrorMsg + " - The request was made but no response was received", error);
          return { error: baseErrorMsg + " - The request was made but no response was received", status: 502 };
        } else {
          console.error(baseErrorMsg + " - The Request was not made", error);
          return { error: baseErrorMsg + " - The Request was not made", data: error.message, status: 500 };
  
        }
      });
  },

  /**
  * Creates a new cart
  * https://commercejs.com/docs/sdk/cart
  */
  handleCreateCart: async () => {
    return await cartAPI.get()
      .then(function (cart) {
        return { data: cart.data, status: cart.status };
      })
      .catch(function (error) {

        const baseErrorMsg = "There was an error while creating the cart";

        if (error.response) {
          console.error(baseErrorMsg, error);
          return { error: baseErrorMsg, data: error.response.data, status: error.response.status };
        } else if (error.request) {
          console.error(baseErrorMsg + " - The request was made but no response was received", error);
          return { error: baseErrorMsg + " - The request was made but no response was received", status: 502 };
        } else {
          console.error(baseErrorMsg + " - The Request was not made", error);
          return { error: baseErrorMsg + " - The Request was not made", data: error.message, status: 500 };
  
        }
      });
  }
}