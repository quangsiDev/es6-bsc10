function sayHello() {}

var sayHi = function () {};

let sayGoodbye = () => {
  console.log("byebye");
};

// anfn
// let countSum = (n1, n2) => {
//   let sum = n1 + n2;
//   console.log("😀 - sum", sum);
//   return sum;
// };
// let countSum = (n1, n2) => {
//   return n1 + n2;
// };

let countSum = (n1, n2) => n1 + n2;
let sum1 = countSum(3, 5);
console.log("😀 - sum1 ", sum1);
