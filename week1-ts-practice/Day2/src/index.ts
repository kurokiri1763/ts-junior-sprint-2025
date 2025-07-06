// 2日目
// ユーザー型を定義
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
}

// 関数に型注釈をつける
function greetUser(user: User): string {
    return `Hello! ${user.name}!(${user.age})`
}

// 実行用データ
const user: User = {
    name: "Alice",
    age: 30,
    isAdmin: false
}

console.log(greetUser(user))