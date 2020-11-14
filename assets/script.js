let tiles = [];
let text = document.querySelector("#textArea");
let turn = undefined;
let reset = document.querySelector("#reset");
let gameOver = undefined;

const clickTile = function(x) {
	if (!gameOver) {
		let tID = x.id.substring(1);
		if (tiles[tID].textContent == "") {
			tiles[tID].textContent = turn ? "X" : "O";
			text.textContent = `It is ${(turn = !turn) ? "X" : "O"}'s turn!`;
		}
		check();
	}
}

const check = function() {
	let flag1 = false;
	let flag2 = undefined;
	let flag3 = undefined;
	let cTile = "O";

	for (let i = 0; i < 2; i++) {
		if (tiles[0].textContent == cTile && tiles[1].textContent == cTile && tiles[2].textContent == cTile) { flag1 = true; flag2 = cTile; }
		else if (tiles[3].textContent == cTile && tiles[4].textContent == cTile && tiles[5].textContent == cTile) { flag1 = true; flag2 = cTile; }
		else if (tiles[6].textContent == cTile && tiles[7].textContent == cTile && tiles[8].textContent == cTile) { flag1 = true; flag2 = cTile; }
		else if (tiles[0].textContent == cTile && tiles[3].textContent == cTile && tiles[6].textContent == cTile) { flag1 = true; flag2 = cTile; }
		else if (tiles[1].textContent == cTile && tiles[4].textContent == cTile && tiles[7].textContent == cTile) { flag1 = true; flag2 = cTile; }
		else if (tiles[2].textContent == cTile && tiles[5].textContent == cTile && tiles[8].textContent == cTile) { flag1 = true; flag2 = cTile; }
		else if (tiles[0].textContent == cTile && tiles[4].textContent == cTile && tiles[8].textContent == cTile) { flag1 = true; flag2 = cTile; }
		else if (tiles[2].textContent == cTile && tiles[4].textContent == cTile && tiles[6].textContent == cTile) { flag1 = true; flag2 = cTile; }
		cTile = "X";
	}
	
	if (!flag1) {
		flag3 = true;
		for (tile of tiles) { if (tile.textContent == "") { flag3 = false; } }
	}

	if (flag1 || flag3) {
		gameOver = true;
		reset.style.display = "inline";

		if (flag1) { text.textContent = `${flag2}'s won the game!`; }
		else if (flag3) { text.textContent = `Stalemate!`; }
	}
}

const init = function() {
	gameOver = false;
	reset.style.display = "none";
	tiles = [];
	for (tile of document.querySelectorAll(".tile")) {
		tile.textContent = "";
		tile.setAttribute("onclick", `clickTile(${tile.id})`);
		tiles.push(tile);
	}
	turn = Math.floor(Math.random() * 2)
	text.textContent = `It is ${turn ? "X" : "O"}'s turn!`;
}

init();