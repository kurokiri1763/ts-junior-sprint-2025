// 1日目
//基本の型
let userName: string ="Alice";
let Age: number = 32;
let isAdmin: boolean = true;

//配列の型
let scores: number[] = [90, 80, 70];

//タプル型
let userInfo: [string, number] = ["Jane", 25];

//列挙型
enum Role {
    Admin,
    User,
    Guest
}
let userRole: Role = Role.Admin;
console.log(userName, Age, isAdmin, scores, userInfo, userRole);

