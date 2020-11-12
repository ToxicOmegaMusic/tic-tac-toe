let tiles = [];
let text = document.querySelector("#textArea");
let turn = undefined;
let reset = document.querySelector("#reset");

const clickTile = function(x) {
	let tID = x.id.substring(1);
	if (tiles[tID-1].textContent == "") {
		tiles[tID-1].textContent = turn ? "X" : "O";
		text.textContent = `It is ${(turn = !turn) ? "X" : "O"}'s turn!`;
	}
	check();
}

const check = function() {

	// Check if the game is won and which player would be the winner
	// Also check for stalemates

	// If game is won
	// reset.style.display = "inline";
}

const init = function() {
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