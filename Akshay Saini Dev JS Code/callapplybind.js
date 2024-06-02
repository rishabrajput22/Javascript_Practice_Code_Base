let namer = {
  first: "rishab",
  last: "rajput",
};

let printfullname = function () {
  console.log(this.first + " " + this.last);
};
printfullname.call(namer);

let name2 = {
  first: "sachin",
  last: "ten",
};
// function borrowing -
printfullname.call(name2);
