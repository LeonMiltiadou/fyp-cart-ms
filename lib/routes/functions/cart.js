"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require('dotenv').config();

var url = process.env.COMMERCEBASEURL + "/carts/";

var cartAPI = _axios["default"].create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY,
    "Accept": "application/json",
    "Content-Type": "application/json"
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
  handleAddToCart: function () {
    var _handleAddToCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cartID, productId, quantity) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return cartAPI.post(cartID, {
                id: productId,
                quantity: quantity
              }).then(function (cart) {
                return {
                  data: cart.data,
                  status: cart.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error adding the item to the cart', error);
                  return {
                    data: 'There was an error adding the item to the cart',
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function handleAddToCart(_x, _x2, _x3) {
      return _handleAddToCart.apply(this, arguments);
    }

    return handleAddToCart;
  }(),

  /**
   * Updates line_items in cart
   * https://commercejs.com/docs/sdk/cart/#update-cart
   *
   * @param {string} lineItemId ID of the cart line item being updated
   * @param {number} quantity New line item quantity to update
   */
  handleUpdateCartQty: function () {
    var _handleUpdateCartQty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(cartID, lineItemId, quantity) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return cartAPI.put(cartID + "/items/" + lineItemId, {
                quantity: quantity
              }).then(function (cart) {
                return {
                  data: cart.data,
                  status: cart.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.log('There was an error updating the cart items', error);
                  return {
                    data: error.response.data,
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function handleUpdateCartQty(_x4, _x5, _x6) {
      return _handleUpdateCartQty.apply(this, arguments);
    }

    return handleUpdateCartQty;
  }(),

  /**
   * Removes line item from cart
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   *
   * @param {string} lineItemId ID of the line item being removed
   */
  handleRemoveFromCart: function () {
    var _handleRemoveFromCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(cartID, lineItemId) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return cartAPI["delete"](cartID + "/items/" + lineItemId).then(function (cart) {
                return {
                  data: cart.data,
                  status: cart.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error removing the item from the cart', error);
                  return {
                    data: error.response.data,
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function handleRemoveFromCart(_x7, _x8) {
      return _handleRemoveFromCart.apply(this, arguments);
    }

    return handleRemoveFromCart;
  }(),

  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */
  handleEmptyCart: function () {
    var _handleEmptyCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(cartID) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return cartAPI["delete"](cartID + "/items").then(function (cart) {
                return {
                  data: cart.data,
                  status: cart.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error emptying the cart', error);
                  return {
                    data: error.response.data,
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function handleEmptyCart(_x9) {
      return _handleEmptyCart.apply(this, arguments);
    }

    return handleEmptyCart;
  }(),

  /**
  * Retrieve the current cart or create one if one does not exist
  * https://commercejs.com/docs/sdk/cart
  */
  fetchCart: function () {
    var _fetchCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(cartID) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return cartAPI.get(cartID).then(function (cart) {
                return {
                  data: cart.data,
                  status: cart.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error fetching the cart', error);
                  return {
                    data: error.response.data,
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function fetchCart(_x10) {
      return _fetchCart.apply(this, arguments);
    }

    return fetchCart;
  }(),

  /**
  * Creates a new cart
  * https://commercejs.com/docs/sdk/cart
  */
  createCart: function () {
    var _createCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return cartAPI.get().then(function (cart) {
                return {
                  data: cart.data,
                  status: cart.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error creating a cart', error);
                  return {
                    data: error.response.data,
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function createCart() {
      return _createCart.apply(this, arguments);
    }

    return createCart;
  }()
};