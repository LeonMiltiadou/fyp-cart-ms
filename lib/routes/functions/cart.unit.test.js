"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jestMockAxios = _interopRequireDefault(require("jest-mock-axios"));

var _require = require('./cart'),
    handleAddToCart = _require.handleAddToCart,
    handleUpdateCartQty = _require.handleUpdateCartQty,
    handleRemoveFromCart = _require.handleRemoveFromCart,
    handleEmptyCart = _require.handleEmptyCart,
    handleFetchCart = _require.handleFetchCart,
    handleCreateCart = _require.handleCreateCart;

afterEach(function () {
  // cleaning up the mess left behind the previous test
  _jestMockAxios["default"].reset();
});
describe("cart functions", function () {
  describe("handleAddToCart", function () {
    //Helper
    function callHandleAddToCart() {
      var cartID = 3;
      var productId = 2;
      var quantity = 1;
      return handleAddToCart(cartID, productId, quantity);
    }

    test("SHOULD add to cart RETURNS cart data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              serverMockResponse = {
                data: "test=cart-data",
                status: 200
              };
              expectedResponse = {
                data: "test=cart-data",
                status: 200
              };
              result = callHandleAddToCart();

              _jestMockAxios["default"].mockResponse(serverMockResponse);

              _context.next = 6;
              return result;

            case 6:
              actualResponse = _context.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              serverMockResponse = {
                message: "test-error-data",
                status: 500
              };
              expectedResponse = {
                error: "There was an error while adding the item to the cart - The Request was not made",
                data: "test-error-data",
                status: 500
              };
              result = callHandleAddToCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context2.next = 6;
              return result;

            case 6:
              actualResponse = _context2.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              serverMockResponse = {
                response: {
                  data: "test-error-data",
                  status: 418
                }
              };
              expectedResponse = {
                error: "There was an error while adding the item to the cart",
                data: "test-error-data",
                status: 418
              };
              result = callHandleAddToCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context3.next = 6;
              return result;

            case 6:
              actualResponse = _context3.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              serverMockResponse = {
                request: {}
              };
              expectedResponse = {
                error: "There was an error while adding the item to the cart - The request was made but no response was received",
                status: 502
              };
              result = callHandleAddToCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context4.next = 6;
              return result;

            case 6:
              actualResponse = _context4.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe("handleUpdateCartQty", function () {
    //Helper
    function callHandleUpdateCartQty() {
      var cartID = 3;
      var productId = 2;
      var quantity = 1;
      return handleUpdateCartQty(cartID, productId, quantity);
    }

    test("SHOULD update quantity of item in cart RETURNS cart data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              serverMockResponse = {
                data: "test=cart-data",
                status: 200
              };
              expectedResponse = {
                data: "test=cart-data",
                status: 200
              };
              result = callHandleUpdateCartQty();

              _jestMockAxios["default"].mockResponse(serverMockResponse);

              _context5.next = 6;
              return result;

            case 6:
              actualResponse = _context5.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              serverMockResponse = {
                message: "test-error-data",
                status: 500
              };
              expectedResponse = {
                error: "There was an error while updating the item quantity in the cart - The Request was not made",
                data: "test-error-data",
                status: 500
              };
              result = callHandleUpdateCartQty();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context6.next = 6;
              return result;

            case 6:
              actualResponse = _context6.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
    test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              serverMockResponse = {
                response: {
                  data: "test-error-data",
                  status: 418
                }
              };
              expectedResponse = {
                error: "There was an error while updating the item quantity in the cart",
                data: "test-error-data",
                status: 418
              };
              result = callHandleUpdateCartQty();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context7.next = 6;
              return result;

            case 6:
              actualResponse = _context7.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              serverMockResponse = {
                request: {}
              };
              expectedResponse = {
                error: "There was an error while updating the item quantity in the cart - The request was made but no response was received",
                status: 502
              };
              result = callHandleUpdateCartQty();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context8.next = 6;
              return result;

            case 6:
              actualResponse = _context8.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
  });
  describe("handleRemoveFromCart", function () {
    //Helper
    function callHandleRemoveFromCart() {
      var cartID = 3;
      var lineItemId = 1;
      var result = handleRemoveFromCart(cartID, lineItemId);
      return result;
    }

    test("SHOULD remove item from cart RETURNS cart data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              serverMockResponse = {
                data: "test=cart-data",
                status: 200
              };
              expectedResponse = {
                data: "test=cart-data",
                status: 200
              };
              result = callHandleRemoveFromCart();

              _jestMockAxios["default"].mockResponse(serverMockResponse);

              _context9.next = 6;
              return result;

            case 6:
              actualResponse = _context9.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
    test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              serverMockResponse = {
                message: "test-error-data",
                status: 500
              };
              expectedResponse = {
                error: "There was an error while removing the item from the cart - The Request was not made",
                data: "test-error-data",
                status: 500
              };
              result = callHandleRemoveFromCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context10.next = 6;
              return result;

            case 6:
              actualResponse = _context10.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    })));
    test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              serverMockResponse = {
                response: {
                  data: "test-error-data",
                  status: 418
                }
              };
              expectedResponse = {
                error: "There was an error while removing the item from the cart",
                data: "test-error-data",
                status: 418
              };
              result = callHandleRemoveFromCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context11.next = 6;
              return result;

            case 6:
              actualResponse = _context11.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    })));
    test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              serverMockResponse = {
                request: {}
              };
              expectedResponse = {
                error: "There was an error while removing the item from the cart - The request was made but no response was received",
                status: 502
              };
              result = callHandleRemoveFromCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context12.next = 6;
              return result;

            case 6:
              actualResponse = _context12.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    })));
  });
  describe("handleEmptyCart", function () {
    //Helper
    function callHandleEmptyCart() {
      var cartID = 3;
      return handleEmptyCart(cartID);
    }

    test("SHOULD empty the cart RETURNS cart data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              serverMockResponse = {
                data: "test=cart-data",
                status: 200
              };
              expectedResponse = {
                data: "test=cart-data",
                status: 200
              };
              result = callHandleEmptyCart();

              _jestMockAxios["default"].mockResponse(serverMockResponse);

              _context13.next = 6;
              return result;

            case 6:
              actualResponse = _context13.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    })));
    test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              serverMockResponse = {
                message: "test-error-data",
                status: 500
              };
              expectedResponse = {
                error: "There was an error while emptying the cart - The Request was not made",
                data: "test-error-data",
                status: 500
              };
              result = callHandleEmptyCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context14.next = 6;
              return result;

            case 6:
              actualResponse = _context14.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    })));
    test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              serverMockResponse = {
                response: {
                  data: "test-error-data",
                  status: 418
                }
              };
              expectedResponse = {
                error: "There was an error while emptying the cart",
                data: "test-error-data",
                status: 418
              };
              result = callHandleEmptyCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context15.next = 6;
              return result;

            case 6:
              actualResponse = _context15.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    })));
    test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              serverMockResponse = {
                request: {}
              };
              expectedResponse = {
                error: "There was an error while emptying the cart - The request was made but no response was received",
                status: 502
              };
              result = callHandleEmptyCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context16.next = 6;
              return result;

            case 6:
              actualResponse = _context16.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    })));
  });
  describe("fetchCart", function () {
    //Helper
    function callhandleFetchCart() {
      var cartID = 3;
      return handleFetchCart(cartID);
    }

    test("SHOULD fetch the cart RETURNS cart data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              serverMockResponse = {
                data: "test=cart-data",
                status: 200
              };
              expectedResponse = {
                data: "test=cart-data",
                status: 200
              };
              result = callhandleFetchCart();

              _jestMockAxios["default"].mockResponse(serverMockResponse);

              _context17.next = 6;
              return result;

            case 6:
              actualResponse = _context17.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    })));
    test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              serverMockResponse = {
                message: "test-error-data",
                status: 500
              };
              expectedResponse = {
                error: "There was an error while fetching the cart - The Request was not made",
                data: "test-error-data",
                status: 500
              };
              result = callhandleFetchCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context18.next = 6;
              return result;

            case 6:
              actualResponse = _context18.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    })));
    test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              serverMockResponse = {
                response: {
                  data: "test-error-data",
                  status: 418
                }
              };
              expectedResponse = {
                error: "There was an error while fetching the cart",
                data: "test-error-data",
                status: 418
              };
              result = callhandleFetchCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context19.next = 6;
              return result;

            case 6:
              actualResponse = _context19.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    })));
    test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              serverMockResponse = {
                request: {}
              };
              expectedResponse = {
                error: "There was an error while fetching the cart - The request was made but no response was received",
                status: 502
              };
              result = callhandleFetchCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context20.next = 6;
              return result;

            case 6:
              actualResponse = _context20.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    })));
  });
  describe("handleCreateCart", function () {
    test("SHOULD fetch the cart RETURNS cart data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              serverMockResponse = {
                data: "test=cart-data",
                status: 200
              };
              expectedResponse = {
                data: "test=cart-data",
                status: 200
              };
              result = handleCreateCart();

              _jestMockAxios["default"].mockResponse(serverMockResponse);

              _context21.next = 6;
              return result;

            case 6:
              actualResponse = _context21.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21);
    })));
    test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              serverMockResponse = {
                message: "test-error-data",
                status: 500
              };
              expectedResponse = {
                error: "There was an error while creating the cart - The Request was not made",
                data: "test-error-data",
                status: 500
              };
              result = handleCreateCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context22.next = 6;
              return result;

            case 6:
              actualResponse = _context22.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    })));
    test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              serverMockResponse = {
                response: {
                  data: "test-error-data",
                  status: 418
                }
              };
              expectedResponse = {
                error: "There was an error while creating the cart",
                data: "test-error-data",
                status: 418
              };
              result = handleCreateCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context23.next = 6;
              return result;

            case 6:
              actualResponse = _context23.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23);
    })));
    test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              serverMockResponse = {
                request: {}
              };
              expectedResponse = {
                error: "There was an error while creating the cart - The request was made but no response was received",
                status: 502
              };
              result = handleCreateCart();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context24.next = 6;
              return result;

            case 6:
              actualResponse = _context24.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24);
    })));
  });
});