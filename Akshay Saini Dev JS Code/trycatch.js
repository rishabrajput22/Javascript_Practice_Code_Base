
const API_Call = "https://api.github.com/users/rishabrajput22";

async function handleFetch() {

    try {
        const data = await fetch(API_Call);

    const response = await data.json();

    console.log(response);
    }
    catch (err) {
        console.log(err);
    }
}
handleFetch();