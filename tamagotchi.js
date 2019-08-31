// TAMAGOTCHI


// images evolution, sick, happy, sad, bored, fantom etc
const style = ["egg", "child", "adult", "old", "fantom"];
const styleHealth = ["happy", "fine", "sad", "depressed", "sick", "dead"];
const styleAsk = ["hungry", "bored", "angry", "asleep"];

class Pet {

	constructor() {

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
		this.evolution = evolution;
		this.fantom = false;
		this.reincarnation = false; // ??? imaginer système de points à chaques reincarnations ?
		this.counter; 

	}
	health() {

		if (this.health === 0 ) {

			this.fantom = true;

			if (this.fantom === true) {

				this.reincarnation = true;

				// donner au user la possiblité de reset, 
				// d'attribuer des pts de réincarnation... (faut pas que ça parte trop loin...)
				// sinon, delete
			}	

		}
	}
	hungry() {

		if (this.hungry <= 75 ) {

			this.counter = setInterval( () => {this.time()},1728); // compteur pour enlever points de santé

		}
		if (this.hungry <= 50 ) {

			this.counter = 0;

			this.counter = setInterval( () => {this.time()},3456); // compteur pour enlever points de santé x 2

		}
		if (this.hungry <= 25 ) {

			this.counter = 0;

			this.counter = setInterval( () => {this.time()},4320) // compteur pour enlever pts de santé x 2.5
		}
		if (this.hungry <= 10 ) {

			this.counter = 0;

			this.counter = setInterval( () => {this.time()},8640) // compteur pour enlever pts de santé x 5
			// this.styleAsk = "asleep" + bruit d'alerte ?

		}
		if (this.hungry === 0 ) {

			this.health();

		}

	}
	happyness() {

		if (this.happyness === 0 ) {

			// depression totale

			this.counter(setInterval, )

			// death
		}
		if (this.happyness < 25 ) {

			//deprimé
		}

		if (this.happyness < 50 ) {

			// mouais bof

		}

		if (this.happuness < 75) {

			// cool
		}

		if (this.happyness <= 100 ) {

			// very cool :)
		}
	}
	asleep() {

		// selon l'heure (paramétrée par le user selon ses habitudes ?), le pet veut dormir (base de 8h ?)

		if (!asleep) {

			// this.hungry --
			// this.happy === fine
			//this.bored -= 10
		}

	}
	bored() {

		// happyness depend aussi de bored() donc un systeme de jeu pour gonfler score borded et au final happyness

	}
	time() {

		this.health--;

		this.health();

	}
	birth() {

		// initialisation

		if ( "compte créé" ) { 

			this birth = true;
			this.style = // créer random style[];


		}

	}
	reincarnation() {

		if (this.fantom = true && /*"reboot"*/ ) {

			// effacer tous parametres et >>> birth() mais garder compte user et score ?

		}

	}

}

const pet = new Pet();

pet.birth();

// construction d'une API pour creer un tamagotchi de base pour tests, puis envoyer des push selon new tamagotchi et comptes créés 































