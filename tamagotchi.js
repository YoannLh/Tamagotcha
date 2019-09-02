// TAMAGOTCHI

// images evolution, sick, happy, sad, bored, fantom etc
const style = ["egg", "child", "adult", "old", "fantom"];
const styleHealth = ["happy", "fine", "sad", "depressed", "sick", "dead"];
const styleAsk = ["hungry", "bored", "angry", "asleep"];

class Pet {

	constructor() {

		this.screen = document.getElementById("perso");
		this.style; 
		this.styleHealth;
		this.styleAsk;
		this.birth = false;
		this.health = 100; 
		this.asleep = false;
		this.hungry = 100; // raisonner par tranches de 25, par repas (matin, midi, 4h, diner)
		this.happyness = 100; 
		this.bored = 0;
		this.sickness = 0;
		this.time;
		this.evolution;
		this.reincarnation = false; // ??? imaginer système de points à chaques reincarnations ?
		this.counter; 
	}
	healthPet() {

		if (this.health === 0 ) {

			this.screen.innerHTML = style[4]; //fantom

				this.reincarnation = true;

				console.log("reincarnation");

				// donner au user la possiblité de reset, 
				// d'attribuer des pts de réincarnation... (faut pas que ça parte trop loin...)
				// sinon, delete
		}
	}
	hungryPet() {

		if (this.hungry <= 75) {

			this.counter = setInterval( () => {this.time()},1728); // compteur pour enlever points de santé

			this.screen.innerHTML = styleAsk[0];

		} else if (this.hungry <= 50) {

			this.counter = 0;

			this.counter = setInterval( () => {this.time()},3456); // compteur pour enlever points de santé x 2

		} else if (this.hungry <= 25) {

			this.counter = 0;

			this.counter = setInterval( () => {this.time()},4320); // compteur pour enlever pts de santé x 2.5
		} else if (this.hungry <= 10) {

			this.counter = 0;

			this.counter = setInterval( () => {this.time()},8640); // compteur pour enlever pts de santé x 5

			// this.styleAsk = "asleep" + bruit d'alerte ?

		} else if (this.hungry === 0) {

			this.health();
		}
	}
	happyness() {

		if (this.happyness === 0 ) {

			// depression totale
			this.screen.innerHTML = styleHealth[4];

			this.counter = setInterval( () => {this.timeHappyness()},900);

			// death
		}
		if (this.happyness < 25 ) {

			//deprimé
			this.screen.innerHTML = styleHealth[3];
		}

		if (this.happyness < 50 ) {

			// mouais bof
			this.screen.innerHTML = styleHealth[2];
		}

		if (this.happuness < 75) {

			// cool
			this.screen.innerHTML = styleHealth[1];
		}

		if (this.happyness <= 100 ) {

			// very cool :)
			this.screen.innerHTML = styleHealth[0];
		}
	}
	asleepPet() {

		// selon l'heure (paramétrée par le user selon ses habitudes ?), le pet veut dormir (base de 8h ?)

		if (!this.asleep) {

			// this.hungry --
			// this.happy === fine
			//this.bored -= 10
		}
	}
	boredPet() {

		// happyness depend aussi de bored() donc un systeme de jeu pour gonfler score bored et au final happyness
	}
	initialisationChild() {

		this.birth = true;

		this.timePet();
	}
	timeBirth() {

		console.log("2");

			this.counter = setInterval( () => {this.initialisationChild()},100);	
	}
	timePet() {

		this.health--;

		this.healthPet();
	}
	timeHungry() {

		this.health--;

		this.health();
	}
	timeHappyness() {

		this.health--;

		this.health();
	}
	birthPet() {

		//initialisation

		this.screen.innerHTML = style[0];

		this.counter = setInterval( () => {this.initialisationChild()},100);

		if (this.birth === false) {

			this.timeBirth();
		}
	}
	reincarnation() {

		if (this.fantom = true /* && "reboot" */ ) {

			// effacer tous parametres et >>> birth() mais garder compte user et score ?
		}
	}
}
const pet = new Pet();

pet.birthPet();

console.log("1");

// construction d'une API pour creer un tamagotchi de base pour tests, puis envoyer des push selon new tamagotchi et comptes créés 



















