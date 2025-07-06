"use strict";
// 関数に型注釈をつける
function greetUser(user) {
    return `Hello! ${user.name}!(${user.age})`;
}
// 実行用データ
const user = {
    name: "Alice",
    age: 30,
    isAdmin: false
};
console.log(greetUser(user));
