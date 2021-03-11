import axios from 'axios';
require('dotenv').config()


const url = "https://api.chec.io/v1/carts/";

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
      if (error.response) {
        console.error('There was an error adding the item to the cart', error);
        return { data: error.response.data, status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
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

      if (error.response) {
        console.log('There was an error updating the cart items', error);
        return { data: error.response.data, status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
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
      if (error.response) {
        console.error('There was an error removing the item from the cart', error);
        return { data: error.response.data, status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
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
      if (error.response) {
        console.error('There was an error emptying the cart', error);
        return { data: error.response.data, status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  },

  /**
  * Retrieve the current cart or create one if one does not exist
  * https://commercejs.com/docs/sdk/cart
  */
  fetchCart: async (cartID) => {
    return await cartAPI.get(cartID)
      .then(function (cart) {
        return { data: cart.data, status: cart.status };
      })
      .catch(function (error) {
        if (error.response) {
          console.error('There was an error fetching the cart', error);
          return { data: error.response.data, status: error.response.status };
        } else {
          return { data: error.message, status: 500 };
        }
      });
  },

  /**
  * Creates a new cart
  * https://commercejs.com/docs/sdk/cart
  */
  createCart: async () => {
    return await cartAPI.get()
      .then(function (cart) {
        return { data: cart.data, status: cart.status };
      })
      .catch(function (error) {
        if (error.response) {
          console.error('There was an error creating a cart', error);
          return { data: error.response.data, status: error.response.status };
        } else {
          return { data: error.message, status: 500 };
        }
      });
  }
}