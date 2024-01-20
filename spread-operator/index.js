// pass by value: string,number, boolean
let a = 2;

let b = a;
b = 0;
// a ?
console.log(a);

let cat1 = {
  name: "miu",
};

let cat2 = { ...cat1, name: "meo meo", color: "black" }; //clone ~ copy
// cat2.name = "meo";
console.log("😀 - cat1", cat1);
console.log("😀 - cat2", cat2);

// pass by reference : array ,object

// array
let colors = ["white", "black"];

let newColors = [...colors, "blue", "green"]; // clone ~ copy
// newColors.push("blue");
console.log("😀 - colors", colors);
console.log("😀 - newColors", newColors);
