
const cart = ["shoes", "pants", "watch"];

// Receiver = 
const promise = createOrderId(cart);

console.log(promise);

promise.then(function (orderId) {
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
});

// Creater =

function createOrderId(cart) {
    const pr = new Promise(function (resolve, reject) {

        if(!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = "2345";
        if(orderId) {
            setTimeout( function () {
                resolve(orderId);
            }, 5000);
        }
    });
        return pr;
}

function validateCart(cart) {
    return false;
}