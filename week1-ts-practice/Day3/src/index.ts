
type PlayerStatus = "alive" | "faint" | "death"

type Player = {
    name: string;
    hp: number;
    status: PlayerStatus;
}

//戦士データ
const warrior: Player = {
    name: "Guts",
    hp: 120,
    status: "alive"
}

// 関数：オプション引数とデフォルト引数あり
function playerStatus(player: Player, includeStatus: boolean = true): string {
    let statusMessage = `${player.name}, \nHP: ${player.hp}`
    if (includeStatus) {
        statusMessage += `\n${player.status}`
    }
    return statusMessage;
}

console.log(playerStatus(warrior)); // デフォルトの引数を使用
console.log(playerStatus(warrior, false)); // オプション引数を使用してステータスを含めない