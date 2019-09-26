// memory

const cards = [];

const fronts = [];

class Memory {

	constructor() {

		this.idCard;
		this.board; 	
	}
	init() {

		// le plateau et les cartes sont crées, 
		// récupération des éléments et intialisation du jeu, de la logique du jeu

		for (let i = 1; i <= board.difficulty; i++) {

			//console.log(board.difficulty);

			memory.distributePositionsCardsRandom(i);


			const card = new Card(i);

			console.log(i);

			card.init();

			

			card.click();

			console.log(card);

			cards.push(card);

			console.log("tableau = " + cards.length);

		}
	}
	constructCouples() {

		// pour la difficulté 10, il y aura 5 fronts
		// pour la difficulté 20, il y aura 10 fronts
		// pour la difficulté 30, il y aura 15 fronts
	}
	distributePositionsCardsRandom(i) {

		/*

		A écrire :

		une boucle dans laquelle i ne sera jamais sa et ses dernieres valeurs (switch ?) :



		while (i < board.difficulty) {

			i = Math.floor(Math.random() * Math.floor(board.difficulty));	

			board.difficulty--;

			console.log(i);
		}

		*/
	}
	showMeCards() {

		// apparition des cartes pdt 5 sec
	}
	turn() {

		// Chaque tour équivault à 2 cartes dévoilées
	}
	firstClick() {

		// A chaque tour : une premiere carte est dévoilée  

		// juste check au click du num de la carte :
			
	}
	rotate() {

		//rotation de la carte clickée
	}
	secondClick() {

		// une seconde carte est dévoilée
	}
	checkTwin() {

		// check match
	}
	fail() {

		// si le match est mauvais
	}
	win() {

		// si le match est bon

		// memory.findTwin();
	}
	findTwin() {

		// yes !
	}
	numberOfFindedTwin() {

		// comptabliliser les couples trouvés, si moitié dépassée >>>
	}
	totalFail() {

		// plus de la moitié des couples ont fail

		// "vous avez perdu";
	}
	totalWin() {

		// laissez tourner pour un possible perfect...

		// En tout cas, après toutes possiblités épuisées si plus de la moitié des couples ont été trouvés

		// "YOU WON !";
	}
}

const memory = new Memory();

memory.init();




















