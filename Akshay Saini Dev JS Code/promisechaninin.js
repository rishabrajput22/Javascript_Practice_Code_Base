const cart = ["shoes", "pants", "watch"];

// Receiver
createOrderId(cart)
  .then(function (orderId) {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.error(err.message);
  });

// Creator
function createOrderId(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "2345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    // Simulating a payment process
    // In a real-world scenario, this would involve actual payment processing logic
    resolve("Payment done for order ID: " + orderId);
  });
}

function validateCart(cart) {
  // Your cart validation logic goes here
  return true;
}
