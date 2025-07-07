"use strict";
// 型ガード：文字列 or 数値 or オブジェクトを受け取る関数
function describeInput(value) {
    if (typeof value === 'string') {
        return `これは文字列です: ${value}`;
    }
    else if (typeof value === 'number') {
        return `これは数値です: ${value}`;
    }
    else if ('name' in value) {
        return `これはオブジェクトです。名前: ${value.name}`;
    }
    else {
        return "未定義の型です";
    }
}
// テスト
console.log(describeInput("こんにちは")); // 文字列
console.log(describeInput(42)); // 数値
console.log(describeInput({ name: "太郎" })); //オブジェクト
const players = [
    { name: "Ryux", hp: 0, status: 'dead' },
    { name: "Fugaku", hp: 120, status: 'alive' },
    { name: "Stark", hp: 80, status: 'alive' },
    { name: "Mike", hp: 100, status: 'alive' },
];
// map: プレイヤーの名一覧
const names = players.map(p => p.name);
// filter: 生存しているプレイヤー
const alivePlayers = players.filter(p => p.status === 'alive');
// reduce: 合計HPを計算
const totalHp = players.reduce((sum, p) => sum + p.hp, 0);
console.log("プレイヤー名一覧:", names);
console.log("生存者:", alivePlayers);
console.log("合計HP:", totalHp);
