// map - forEach

let nums = [2, 4, 6, 8];

// forEach ~ duyệt mảng
nums.forEach((item) => {
  console.log("😀 - item", item);
});
// map ~ duyệt mảng ~ trả về mảng mới

let result = nums.map((item, index) => {
  return `<p>${item}</p>`;
});
console.log("😀 - result", result);
