// không có định số lượng tham số truyền vào function

// chuyển đối số thành array

let tinhDTB = (...scores) => {
  console.log("😀 - scores", scores);

  //   reduce js => tính tổng
  let result = scores.reduce((sum, current) => sum + current, 0);
  console.log("😀 - result", result);
  return result / scores.length;
};

let dtb = tinhDTB(2, 4, 10, 7, 8, 1, 10);
console.log("😀 - dtb", dtb);
