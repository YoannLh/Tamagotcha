//INTERFACE

console.log("interface");

class Interface {

	constructor() {

		this.interface = document.getElementById("interface");
		this.interface2 = document.getElementById("interface2");
		this.buttonFeed = document.getElementById("nourrir");
		this.buttonPlay = document.getElementById("jouer");
		this.buttonCure = document.getElementById("soigner");
		this.buttonReset = document.getElementById("reset");
		this.buttonDormir = document.getElementById("dormir");
		this.buttonClean = document.getElementById("clean");
		this.state = document.getElementById("state");
		this.birth;
		this.hungry;
	}
	feed() {
		
		this.buttonFeed = document.getElementById("nourrir")
		this.buttonFeed.addEventListener("click", () => {
			console.log("nourrir");
			pet.feedPet();
			this.state.innerHTML = ("miam :)");
		})
	}
	play() {

		this.buttonPlay.addEventListener("click", () => {
			("jouer");
			pet.playPet();	
			this.state.innerHTML = ("Ouais ! :)");
		})
	}
	cure() {

		this.buttonCure.addEventListener("click", () => {
			console.log("soigner");
			this.state.innerHTML = ("On me soigne :')");
			pet.curePet();
		})
	}
	clean() {

		this.buttonClean.addEventListener("click", () => {
			pet.cleanPet();
		})
	}
	dormir() {

		this.buttonDormir.addEventListener("click", () => {
			console.log("dormir");
			this.state.innerHTML = ("Au dodo !");
			//this.counterSleeping = setInterval( () => {this.goToBed()}, 10000);
			pet.goToBed();
		})
	}
	reset() {

		this.buttonReset.addEventListener("click", () => {
			console.log("reset");
			pet.birthPet();
		})
	}
}


const interface = new Interface();

console.log("?>");

interface.feed();

interface.play();

interface.cure();

interface.clean();

interface.dormir();

interface.reset();

//interface.checkBeforeBirth();

// construction d'une API pour creer un tamagotchi de base pour tests, 
// puis envoyer des push selon new tamagotchi et comptes créés 


















