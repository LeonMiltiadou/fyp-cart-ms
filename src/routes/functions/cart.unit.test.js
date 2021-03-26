import mockAxios from 'jest-mock-axios';
const { handleAddToCart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, handleFetchCart, handleCreateCart } = require('./cart');


afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});


describe("cart functions", () => {
    describe("handleAddToCart", function () {
        //Helper
        function callHandleAddToCart() {
            const cartID = 3;
            const productId = 2;
            const quantity = 1;

            return handleAddToCart(cartID, productId, quantity);
        }
        test("SHOULD add to cart RETURNS cart data and status code as an object", async function () {
            const serverMockResponse = { data: "test=cart-data", status: 200 };
            const expectedResponse = { data: "test=cart-data", status: 200 };

            let result = callHandleAddToCart();
            mockAxios.mockResponse(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", async function () {
            const serverMockResponse = { message: "test-error-data", status: 500 };
            const expectedResponse = { error: "There was an error while adding the item to the cart - The Request was not made", data: "test-error-data", status: 500 };

            let result = callHandleAddToCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


        test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", async function () {
            const serverMockResponse = { response: { data: "test-error-data", status: 418 } };
            const expectedResponse = { error: "There was an error while adding the item to the cart", data: "test-error-data", status: 418 };

            let result = callHandleAddToCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", async function () {
            const serverMockResponse = { request: {} };
            const expectedResponse = { error: "There was an error while adding the item to the cart - The request was made but no response was received", status: 502 };

            let result = callHandleAddToCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });
    })

    describe("handleUpdateCartQty", () => {

        //Helper
        function callHandleUpdateCartQty() {
            const cartID = 3;
            const productId = 2;
            const quantity = 1;

            return handleUpdateCartQty(cartID, productId, quantity);
        }
        test("SHOULD update quantity of item in cart RETURNS cart data and status code as an object", async function () {
            const serverMockResponse = { data: "test=cart-data", status: 200 };
            const expectedResponse = { data: "test=cart-data", status: 200 };

            let result = callHandleUpdateCartQty();
            mockAxios.mockResponse(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", async function () {
            const serverMockResponse = { message: "test-error-data", status: 500 };
            const expectedResponse = { error: "There was an error while updating the item quantity in the cart - The Request was not made", data: "test-error-data", status: 500 };

            let result = callHandleUpdateCartQty();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


        test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", async function () {
            const serverMockResponse = { response: { data: "test-error-data", status: 418 } };
            const expectedResponse = { error: "There was an error while updating the item quantity in the cart", data: "test-error-data", status: 418 };



            let result = callHandleUpdateCartQty();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", async function () {
            const serverMockResponse = { request: {} };
            const expectedResponse = { error: "There was an error while updating the item quantity in the cart - The request was made but no response was received", status: 502 };

            let result = callHandleUpdateCartQty();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });
    })

    describe("handleRemoveFromCart", () => {

        //Helper
        function callHandleRemoveFromCart() {
            const cartID = 3;
            const lineItemId = 1;

            let result = handleRemoveFromCart(cartID, lineItemId);
            return result;
        }
        test("SHOULD remove item from cart RETURNS cart data and status code as an object", async function () {
            const serverMockResponse = { data: "test=cart-data", status: 200 };
            const expectedResponse = { data: "test=cart-data", status: 200 };

            let result = callHandleRemoveFromCart();
            mockAxios.mockResponse(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", async function () {
            const serverMockResponse = { message: "test-error-data", status: 500 };
            const expectedResponse = { error: "There was an error while removing the item from the cart - The Request was not made", data: "test-error-data", status: 500 };

            let result = callHandleRemoveFromCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


        test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", async function () {
            const serverMockResponse = { response: { data: "test-error-data", status: 418 } };
            const expectedResponse = { error: "There was an error while removing the item from the cart", data: "test-error-data", status: 418 };



            let result = callHandleRemoveFromCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", async function () {
            const serverMockResponse = { request: {} };
            const expectedResponse = { error: "There was an error while removing the item from the cart - The request was made but no response was received", status: 502 };

            let result = callHandleRemoveFromCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


    })

    describe("handleEmptyCart", () => {

        //Helper
        function callHandleEmptyCart() {
            const cartID = 3;

            return handleEmptyCart(cartID);
        }
        test("SHOULD empty the cart RETURNS cart data and status code as an object", async function () {
            const serverMockResponse = { data: "test=cart-data", status: 200 };
            const expectedResponse = { data: "test=cart-data", status: 200 };

            let result = callHandleEmptyCart();
            mockAxios.mockResponse(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", async function () {
            const serverMockResponse = { message: "test-error-data", status: 500 };
            const expectedResponse = { error: "There was an error while emptying the cart - The Request was not made", data: "test-error-data", status: 500 };

            let result = callHandleEmptyCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


        test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", async function () {
            const serverMockResponse = { response: { data: "test-error-data", status: 418 } };
            const expectedResponse = { error: "There was an error while emptying the cart", data: "test-error-data", status: 418 };



            let result = callHandleEmptyCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", async function () {
            const serverMockResponse = { request: {} };
            const expectedResponse = { error: "There was an error while emptying the cart - The request was made but no response was received", status: 502 };

            let result = callHandleEmptyCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });
    })
    describe("fetchCart", () => {

        //Helper
        function callhandleFetchCart() {
            const cartID = 3;

            return handleFetchCart(cartID);
        }
        test("SHOULD fetch the cart RETURNS cart data and status code as an object", async function () {
            const serverMockResponse = { data: "test=cart-data", status: 200 };
            const expectedResponse = { data: "test=cart-data", status: 200 };

            let result = callhandleFetchCart();
            mockAxios.mockResponse(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", async function () {
            const serverMockResponse = { message: "test-error-data", status: 500 };
            const expectedResponse = { error: "There was an error while fetching the cart - The Request was not made", data: "test-error-data", status: 500 };

            let result = callhandleFetchCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


        test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", async function () {
            const serverMockResponse = { response: { data: "test-error-data", status: 418 } };
            const expectedResponse = { error: "There was an error while fetching the cart", data: "test-error-data", status: 418 };



            let result = callhandleFetchCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", async function () {
            const serverMockResponse = { request: {} };
            const expectedResponse = { error: "There was an error while fetching the cart - The request was made but no response was received", status: 502 };

            let result = callhandleFetchCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


    })
    describe("handleCreateCart", () => {
        test("SHOULD fetch the cart RETURNS cart data and status code as an object", async function () {
            const serverMockResponse = { data: "test=cart-data", status: 200 };
            const expectedResponse = { data: "test=cart-data", status: 200 };

            let result = handleCreateCart();
            mockAxios.mockResponse(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", async function () {
            const serverMockResponse = { message: "test-error-data", status: 500 };
            const expectedResponse = { error: "There was an error while creating the cart - The Request was not made", data: "test-error-data", status: 500 };

            let result = handleCreateCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


        test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", async function () {
            const serverMockResponse = { response: { data: "test-error-data", status: 418 } };
            const expectedResponse = { error: "There was an error while creating the cart", data: "test-error-data", status: 418 };



            let result = handleCreateCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });

        test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", async function () {
            const serverMockResponse = { request: {} };
            const expectedResponse = { error: "There was an error while creating the cart - The request was made but no response was received", status: 502 };

            let result = handleCreateCart();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;

            expect(actualResponse).toEqual(expectedResponse);

        });


    })
})
