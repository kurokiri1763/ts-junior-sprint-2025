"use strict";
// 関数：オプション引数とデフォルト引数あり
function playerStatus(player, includeStatus = true) {
    let statusMessage = `${player.name}, \nHP: ${player.hp}`;
    if (includeStatus) {
        statusMessage += `\n${player.status}`;
    }
    return statusMessage;
}
const warrior = {
    name: "Guts",
    hp: 120,
    status: "alive"
};
console.log(playerStatus(warrior)); // デフォルトの引数を使用
console.log(playerStatus(warrior, false)); // オプション引数を使用してステータスを含めない
