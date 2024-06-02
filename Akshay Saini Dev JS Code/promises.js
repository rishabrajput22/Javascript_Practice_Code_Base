
const Github_api = "https://api.github.com/users/rishabrajput22";

const user = fetch(Github_api);

console.log(user);


user.then(function (data) {
    console.log(data);
});