
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 1 done");
    },20000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 done");
    }, 30000);
});

async function handlePromise() {
    console.log("hello world");

    const val1 = await p1;
    console.log("Namaste JS 1");
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste JS 2");
    console.log(val2);
}
handlePromise();