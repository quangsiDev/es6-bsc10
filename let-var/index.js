console.log(username);
var username = "alice";
var username = "bob";

/**
var : cho phép tạo 2 biến trùng tên
let: không được tạo 2 biế  trùng tên
 */

// console.log(number); error
let number = 2;
// let number = 3; error

// scope ~ phạm vi hoạt động

// function scope  ~ var

var isLogin = true;
function checkLogin() {
  console.log("😀 - message", message);
  if (isLogin) {
    var message = "Success";
  } else {
    var message = "Error";
  }
}
// console.log("😀 - message", message);

checkLogin();

// block scope {} ~ let

let is_login = true;

function check_login() {
  if (is_login) {
    let message = "Suceess";
  } else {
    let message = "Error";
  }
  //   console.log("😀 - message", message); // error
}

check_login();

// api quản lý giỏ hàng của user : thêm vào giỏ hàng, xoá sp khỏi giỏ hàng, update sp trong giỏ hàng ( số lượng ss)

// api quản lý sp : lấy ds sp, tạo mới 1 sp
