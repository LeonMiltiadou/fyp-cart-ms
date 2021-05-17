"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('./emptycart'),
    emptyCart = _require.emptyCart,
    cartFunction = _require.cartFunction;

describe("emptycart", function () {
  test("SHOULD successfully emptycart RESPOND with status code and data", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var expectedStatus, expectedData, req, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expectedStatus = 200;
            expectedData = 1;
            req = {
              params: {
                cartID: 1
              }
            };
            res = {
              status: function status(_status) {
                expect(_status).toEqual(expectedStatus);
                return this;
              },
              json: function json(data) {
                expect(data).toEqual(expectedData);
                return this;
              }
            };
            cartFunction.handleEmptyCart = jest.fn().mockReturnValue({
              data: expectedData,
              status: expectedStatus
            });
            _context.next = 7;
            return emptyCart(req, res);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test("SHOULD log 500 error BECAUSE request was never sent to external server SENDS status code 500, and error msg and data as a json object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var expectedResponse, expectedData, expectedStatus, req, res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            expectedResponse = {
              error: "test-error-message",
              data: "test-error-data",
              status: 500
            };
            expectedData = {
              error: "test-error-message",
              data: "test-error-data"
            };
            expectedStatus = 500;
            req = {
              params: {
                cartID: 1
              }
            };
            res = {
              status: function status(_status2) {
                expect(_status2).toEqual(expectedStatus);
                return this;
              },
              json: function json(data) {
                expect(data).toEqual(expectedData);
                return this;
              }
            };
            cartFunction.handleEmptyCart = jest.fn().mockReturnValue(expectedResponse);
            _context2.next = 8;
            return emptyCart(req, res);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test("SHOULD log 418 error BECAUSE some error occured on external server SENDS status code 418, and error msg and data as a json object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var expectedStatus, expectedData, expectedResponse, req, res;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            expectedStatus = 418;
            expectedData = {
              error: "test-error-message",
              data: "test-error-data"
            };
            expectedResponse = {
              error: "test-error-message",
              data: "test-error-data",
              status: 418
            };
            req = {
              params: {
                cartID: 1
              }
            };
            res = {
              status: function status(_status3) {
                expect(_status3).toEqual(expectedStatus);
                return this;
              },
              json: function json(data) {
                expect(data).toEqual(expectedData);
                return this;
              }
            };
            cartFunction.handleEmptyCart = jest.fn().mockReturnValue(expectedResponse);
            _context3.next = 8;
            return emptyCart(req, res);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test("SHOULD log 502 error BECAUSE external server did not respond SENDS status code 502, and error msg as a json object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var expectedStatus, expectedData, expectedResponse, req, res;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            expectedStatus = 502;
            expectedData = {
              error: "test-error-message"
            };
            expectedResponse = {
              error: "test-error-message",
              status: 502
            };
            req = {
              params: {
                cartID: 1
              }
            };
            res = {
              status: function status(_status4) {
                expect(_status4).toEqual(expectedStatus);
                return this;
              },
              json: function json(data) {
                expect(data).toEqual(expectedData);
                return this;
              }
            };
            cartFunction.handleEmptyCart = jest.fn().mockReturnValue(expectedResponse);
            _context4.next = 8;
            return emptyCart(req, res);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test("SHOULD log 500 error BECAUSE error, data, and status object all did not exist SENDS status code 500, and error msg as a json object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var expectedStatus, expectedData, expectedResponse, req, res;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            expectedStatus = 500;
            expectedData = {
              error: "An unexpected error has occured"
            };
            expectedResponse = {};
            req = {
              params: {
                cartID: 1
              }
            };
            res = {
              status: function status(_status5) {
                expect(_status5).toEqual(expectedStatus);
                return this;
              },
              json: function json(data) {
                expect(data).toEqual(expectedData);
                return this;
              }
            };
            cartFunction.handleEmptyCart = jest.fn().mockReturnValue(expectedResponse);
            _context5.next = 8;
            return emptyCart(req, res);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
});