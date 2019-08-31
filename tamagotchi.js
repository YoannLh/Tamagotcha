// TAMAGOTCHI

// images evolution, sick, happy, sad, bored, fantom etc
const style = ["egg", "child", "adult", "old", "fantom"];
const styleHealth = ["happy", "fine", "sad", "depressed", "sick", "dead"];
const styleAsk = ["hungry", "bored", "angry", "asleep"];

class Pet {

	constructor() {

		this.style; 
		this.birth = false;
		this.health = 100; 
		this.asleep = false;
		this.hungry = 100; // raisonner par tranches de 25, par repas (matin, midi, 4h, diner)
		this.happyness = 100; 
		this.bored = 0;
		this.sickness = 0;
		this.time = time;
		this.evolution = evolution;
		this.fantom = false;
		this.reincarnation = false;
		this.counter; 

	}

	health() {

		if (this.health === 0 ) {

			this.fantom = true;

			if (this.fantom === true) {

				//donner au user la possiblité de reset

				this.reincarnation = true;

			}

		}
	}

	hungry() {

		if (this.hungry === 0) {

			this.counter(setInterval, ) // compteur pour enlever points de sante
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

		//timer fantom

		// possibilité "immortalité" si on s'en occupe bien ?

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































