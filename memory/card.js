// class Card 

const backs = ["url('img/back.jpg')"];

class Card {

	constructor(idCard) {

		this.idCard = idCard;
		this.newCard;
		this.back; // image
		this.front; // image
		this.board = document.getElementById("board");
	}
	init() {

		// console.log("créa de la card " + this.idCardArray);
		console.log("init");
		this.newCard = document.createElement("div");
		this.board.appendChild(this.newCard);
		this.styleCard();	
	}
	styleCard() { 

		console.log("style card");
		this.newCard.style.height = "222px";
		this.newCard.style.width = "222px";
		this.newCard.style.margin = "auto";
		this.newCard.style.border = "green solid 1px";
		this.back();
	}
	back() {

		this.newCard.style.backgroundImage = backs[0];
	}
	click() {

		this.newCard.addEventListener("click", () => {
			console.log("carte" + " " + this.idCard);
		})
	}
}
























