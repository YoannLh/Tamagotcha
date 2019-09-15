
// TAMAGOTCHI

// images evolution, sick, happy, sad, bored, fantom etc

const style = ["url('img/egg.png')", "url('img/birth.gif')", "url('img/child.gif')", "adult", "old", "url('img/fantom.gif')", "url('img/eclosion/gif')"];

const styleHealth = ["url('img/miam2.gif')", "url('img/happy.png')", "fine", "url('img/hungry.gif')", "sad", "url('img/depressed2.gif')", 

					 "url('img/sick.gif')", "dead" ,"url('img/sleeping.gif')", "url('img/angry.png')", "url('img/caca.gif')"];

const styleAsk = ["hungry", "bored", "angry", "sick", "url('img/baillement.gif')"];

const styleRandomFace = ["url('img/buterfly.gif')", "url('img/questionning.gif", "url('img/escargot.gif')", 

					     "url('img/child.gif')", "url('img/whistling.gif')", "url('img/justLooking.gif')"];

const stylePlaying = ["url('img/soleil.gif')"];

class Pet {

	constructor() {

		this.screen = document.getElementById("perso");
		this.state = document.getElementById("state");
		this.style; 
		this.styleHealth;
		this.styleAsk;
		this.health = 100; 
		this.asleep = false;
		this.sleep = 99;
		this.hungry = 76; // raisonner par tranches de 25, par repas (matin, midi, 4h, diner)
		this.happy = 100; 
		this.bored = 0;
		this.sickness = 0;
		this.time;
		this.evolution;
		//this.reincarnation = false; //s ??? imaginer système de points à chaques reincarnations ?
		this.counter;
		this.counterHungry = 0;
		this.counterInitialisation = 0;		
		this.counterTime = 0;
		this.counterTimePet = 0;
		this.counterPlay = 100;
		this.counterHappyness = 0;
		this.counterAsleep = 0;
		this.counterPoo = 0;
		this.counterSleeping = 100;
		this.counterRandomFace;
		this.counterBored;
		this.interval;
		this.interface = document.getElementById("interface");
		this.interface2 = document.getElementById("interface2");
		this.buttonReset = document.getElementById("reset");
		
	}
	/*
	clearAllInterval() {

		clearInterval(this.counterTime); 
		clearInterval(this.counterHappyness); 
		clearInterval(this.counterRandomFace); 
		clearInterval(this.counterAsleep); 
		clearInterval(this.counterBored); 
		clearInterval(this.counterPoo);
	
	}
	*/
	/*
	killState() {

		if (this.state != "") { 
		this.state.innerHTML = "";
		}
	}
	*/
	randomFace() {

		//this.state.innerHTML = "";
		this.screen.style.backgroundImage = styleRandomFace[Math.floor(Math.random() * Math.floor(6))];
	}
	deathPet() {

		console.log("deathPet");
		clearInterval(this.counterTime); 
		clearInterval(this.counterHappyness); 
		clearInterval(this.counterRandomFace); 
		clearInterval(this.counterAsleep); 
		clearInterval(this.counterBored); 
		clearInterval(this.counterPoo);
		this.screen.style.backgroundImage = style[5]; //fantom
		this.screen.style.transform = "scale(4)";
		this.state.innerHTML = styleHealth[7];
		this.interface.style.display = "none";
		this.interface2.style.display = "none";
		this.buttonReset.style.background = "block";

	}
	reincarnation() {

		console.log("reincarnation");
		this.screen.style.background = "none";
		this.screen.style.backgroundRepeat = "no-repeat";
			
		// >>> reinitialiser all	

	}
	sickPet() {

		this.screen.style.backgroundImage = styleHealth[6];

	}
	healthPet() {

		this.state.innerHTML = "";
		this.health--;
		console.log("santé = " + this.health);
		if (this.health <= 25) {
			this.screen.style.background = styleHealth[6];
		}
		if (this.health === 0 ) {
			clearInterval(this.counterHungry);
			//clearInterval(this.counterTime); 
			pet.deathPet();
			console.log("dead...");
				// donner au user la possiblité de reset, 
				// d'attribuer des pts de réincarnation... (faut pas que ça parte trop loin...)
				// sinon, delete l'idée
		}
	}
	curePet() {

		console.log("soigné :)");
		this.health =+ 5;
		if (this.health > 100) {
			this.health = 100;
		}

	}
	hungryPet() {

		this.hungry--;
		this.state.innerHTML = "";
		console.log("faim = " + this.hungry);
		//this.screen.style.backgroundImage = style[2];
		if (this.hungry <= 75) {
			this.screen.style.backgroundImage = styleHealth[3];
			this.state.innerHTML = styleAsk[0];
		} 
		if (this.hungry <= 50) {
			//clearInterval(this.counterHungry);
			this.screen.style.backgroundImage = styleHealth[3];
			console.log("faim");
		} 
		if (this.hungry < 25) {
			this.screen.style.backgroundImage = styleHealth[3];
		}
		if (this.hungry === 0) {
			console.log("mort de faim...");
			pet.deathPet();	
		}
	}
	feedPet() {

		console.log("miam");
		this.screen.style.backgroundImage = styleHealth[0];
		this.hungry += 25;
		//pet.killState();
		this.counterPoo = setInterval( () => {this.pooPet()},100000);
		if (this.hungry > 100) {
			this.hungry = 100;
		}
	}
	pooPet() {

		console.log("caca");
		this.state.innerHTML = "ça pue...";
		clearInterval(this.counterPoo);
		this.screen.style.backgroundImage = styleHealth[10];
		clearInterval(this.counterRandomFace);
	}
	cleanPet() {

		console.log("cleaning");
		//this.screen.style.backgroundImage = styleHealth[?]; ... créer un gif nettoyage
		this.state.innerHTML = "cleaning";
		clearInterval(this.counterRandomFace);
		this.counterRandomFace = setInterval( () => {this.randomFace()}, 5000);
		// this.counterTime = setInterval( () => {this.hungryPet()},20000);
		// pet.killState();
	}
	happyness() {

		this.happy--;
		if (this.happy < 50 ) {
			this.state.innerHTML = ("'gonna play with me ?");
			console.log("'gonna play with me ?");
		}
		if (this.happy < 25) {
			this.screen.style.backgroundImage = styleHealth[5];
		}
		if (this.happy === 0 ) {
			this.state.innerHTML = styleHealth[0];
		}
	}
	playPet() {

		clearInterval(this.counterRandomFace);
		console.log("playing :)");
		this.screen.style.backgroundImage = stylePlaying[0];
		this.happy += 15;
		if (this.happy > 100) {
			this.happy = 100;
		}
	}
	/*
	boredPet() {

		this.screen.style.backgroundImage = styleAsk[5];

		clearInterval(this.counterBored);

		//this.playPet();

		// happyness depend aussi de bored() donc un systeme de jeu pour gonfler score bored et au final happyness
	}
	*/
	asleepPet() {

		// selon l'heure (paramétrée par le user selon ses habitudes ?), le pet veut dormir (base de 8h ?)
		this.sleep--;
		console.log("sleep = " + this.sleep);
		if (this.sleep < 25) {
			this.screen.style.backgroundImage = styleAsk[4];
		}
		if (this.sleep === 0) {
			pet.goToBed();
		}
	}
	goToBed() {

		if (this.sleep > 25) {
			this.screen.style.backgroundImage = styleHealth[9];
		} else {
			console.log("go to bed");
			this.screen.style.backgroundImage = styleHealth[8];
			clearInterval(this.counterAsleep);
			this.sleep++;
			//pet.clearAllInterval();
			this.counterTimePet = setInterval( () => {this.timePet()},1000000);
		}
		if (this.sleep === 100){
			pet.timePet();
		}
	}



	eclosion() {

		this.screen.style.background. = style[6];
	}



	initialisationChild() {

		this.interface.style.display = "block";
		this.interface2.style.display = "block";
		console.log("3");
		this.screen.style.transform = "scale(3)";
		this.screen.style.background = "img/birth.gif";
		clearInterval(this.counterInitialisation);
		console.log("3.5");
		this.timePet();
	}
	timePet() {

		clearInterval(this.counterInitialisation);
		console.log("clearInitialisation");
		this.screen.style.transform = "scale(3)";
		this.screen.style.backgroundImage = style[2];
		console.log("4");
		this.counterTime = setInterval( () => {this.hungryPet()},20000); // 24H = 864 000 000ms
		this.counterHappyness = setInterval( () => {this.happyness()},10000);
		this.counterRandomFace = setInterval( () => {this.randomFace()}, 5000);
		this.counterAsleep = setInterval( () => {this.asleepPet()}, 10000);
		//this.counterBored = setInterval( () => {this.boredPet()}, 15000);
	}
	timeHungry() {

		this.health--;
		//this.healthPet();
	}
	birthPet() {

		//initialisation
		console.log("init");
			console.log("2");
			this.screen.style.backgroundRepeat = "no-repeat";
			this.screen.style.backgroundImage = style[1];
			// délai avant sortie de l'oeuf
			this.counterInitialisation = setInterval( () => {this.initialisationChild()},1000);
			console.log("2.5");
			this.interface.style.display = "none";
			this.interface2.style.display = "none";	
	}
}

const pet = new Pet();

pet.birthPet();

console.log("go");








