"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var cartFunction = require('../functions/cart');

var addToCart = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, cartID, productId, quantity, cart, errorMsg;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, cartID = _req$body.cartID, productId = _req$body.productId, quantity = _req$body.quantity;
            _context.next = 3;
            return exportFunctions.cartFunction.handleAddToCart(cartID, productId, quantity);

          case 3:
            cart = _context.sent;

            //Checks to see that the required object keys exist, otherwise an error occured
            if (cart.error || cart.data || cart.status) {
              //If there was an error adding to the cart
              if (cart.error) {
                if (cart.data) {
                  res.status(cart.status).json({
                    error: cart.error,
                    data: cart.data
                  });
                } else {
                  res.status(cart.status).json({
                    error: cart.error
                  });
                }
              } else {
                //Successfully added to cart
                res.status(cart.status).json(cart.data);
              }
            } else {
              errorMsg = "An unexpected error has occured";
              console.error(errorMsg);
              res.status(500).json({
                error: errorMsg
              });
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addToCart(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var exportFunctions = {
  addToCart: addToCart,
  cartFunction: cartFunction
};
module.exports = exportFunctions;