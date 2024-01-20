// let name = this.props.user.name
// object ~ trùng tên key
let user = {
  name: "alice",
  age: 20,
  pet: {
    name: "kiki",
  },
};

let { name, age } = user;
let { name: petName } = user.pet; // remame
console.log("😀 - petName", petName);
console.log("😀 - age", age);
console.log("😀 - name", name);
// array ~ đúng thứ tự

let colors = ["red", "blue"];

let [c1, c2] = colors;
console.log("😀 - c1, c2", c1, c2);
