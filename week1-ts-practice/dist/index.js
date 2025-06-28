"use strict";
//基本の型
let userName = "Alice";
let Age = 32;
let isAdmin = true;
//配列の型
let scores = [90, 80, 70];
//タプル型
let userInfo = ["Jane", 25];
//列挙型
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(userName, Age, isAdmin, scores, userInfo, userRole);
