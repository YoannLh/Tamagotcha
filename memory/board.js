// class Board

class Board {

	constructor(difficulty) {

		this.difficulty = difficulty;
		this.board = document.getElementById("board"); // à créer en HTML
	}
	init() {
	
	}
	positions() {

		this.difficulty;
	}
}

let difficulty = prompt("Quelle nombre de cartes souhaitez-vous ? 10, 20 ou 30 ?");

const board = new Board(difficulty);