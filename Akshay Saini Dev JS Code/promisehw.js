const cart = ["shoes", "pants", "watch"];
let walletBalance = 100; // Initial wallet balance

// Receiver
createOrderId(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return getOrderSummary(); // New step to get the order summary
  })
  .then(function (orderSummary) {
    console.log("Order Summary:", orderSummary);
    return updateWalletBalance(walletBalance - calculateOrderTotal(cart)); // Update wallet balance
  })
  .then(function (updatedWalletBalance) {
    console.log("Updated Wallet Balance:", updatedWalletBalance);
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

function getOrderSummary() {
  return new Promise(function (resolve) {
    // Simulating getting the order summary
    const orderSummary = "Ordered items: shoes, pants, watch";
    resolve(orderSummary);
  });
}

function updateWalletBalance(newBalance) {
  return new Promise(function (resolve) {
    // Simulating updating the wallet balance
    setTimeout(function () {
      resolve(newBalance);
    }, 2000);
  });
}

function calculateOrderTotal(cart) {
  // Simulating calculating the order total based on the items in the cart
  return cart.length * 20; // Assuming each item costs $20
}

function validateCart(cart) {
  // Your cart validation logic goes here
  return true;
}
