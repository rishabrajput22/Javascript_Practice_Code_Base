
// promise.all() =

// const p1 = new Promise( function(resolve, reject) {
//     setTimeout( () => resolve("P1 success"),3000);
// });

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout( () => resolve("p2 success"), 1000);
// });

// const p3 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("p3 success"),2000);
// });


// Promise.all([p1,p2,p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// });

// promise.allsettled()

// const p1 = new Promise( function(resolve, reject) {
//     setTimeout( () => resolve("P1 success"),3000);
// });

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout( () => resolve("p2 success"), 1000);
// });

// const p3 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("p3 success"),2000);
// });


// Promise.allSettled([p1,p2,p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// });

// promise.race()
// const p1 = new Promise( function(resolve, reject) {
//     setTimeout( () => resolve("P1 success"),3000);
// });

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout( () => resolve("p2 success"), 5000);
// });

// const p3 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("p3 success"),2000);
// });


// Promise.race([p1,p2,p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// });

// promise any()
const p1 = new Promise( function(resolve, reject) {
    setTimeout( () => reject("P1 fail"),3000);
});

const p2 = new Promise(function (resolve, reject) {
    setTimeout( () => reject("p2 fail"), 1000);
});

const p3 = new Promise(function (resolve, reject) {
    setTimeout(() => reject("p3 fail"),2000);
});

Promise.any([p1,p2,p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
    console.log(err.errors);
});