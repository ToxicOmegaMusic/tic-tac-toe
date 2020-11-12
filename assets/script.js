let tiles = [];
let text = document.querySelector("#textArea");
let turn = undefined;







const init = function() {
	tiles = [];
	for (tile of document.querySelectorAll(".tile")) {
		tiles.push(tile);
		tile.textContent = "";
	}

	text.textContent = `It is ${turn = Math.floor(Math.random() * 2) ? "X" : "O"}'s turn!`;
}

init();