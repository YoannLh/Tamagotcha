// TAMAGOTCHI

const style = [];

// images evolution, sick, happy, sad, bored, fantom etc

class Bestiole {

	constructor() {

		this.style; 
		this.birth = false;
		this.sante = 100; 
		this.hungry = 100; // raisonner par tranches de 25, par repas quoi
		this.happyness = 100; 
		this.bored;
		this.sickness;
		this.time = time;
		this.evolution = evolution;
		this.fantom = false;
		this.counter; // ???
		this.reincarnation = false;

	}

	sante() {

		if (this.sante === 0 ) {

			this.fantom = true;

			this.reincarnation = true;

		}
	}

	hungry() {

		if (this.hungry === 0) {

			this.counter(setInterval, ) // compteur pour enlever points de sante
		}
	}
		bored() {

		// happyness depend aussi de bored() donc un systeme de jeu pour gonfler score borded et au final happyness

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

		if (this.fantom = true && "reboot" ) {

			// effacer tous parametres et >>> birth() mais garder compte

		}

	}

}

const bestiole = new Bestiole();

bestiole.birth();

// construction d'une API pour creer un tamagotchi de base pour tests, puis envoyer des push selon new tamagotchi et comptes créés 































