// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Consegna PARTE 2     

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


//selezion elementi nel DOM
const elementInfo = document.querySelector('.info');
const elementGrid = document.querySelector ('.grid');
const buttonPlay = document.querySelector('#play');
let n_Cells = 100;
let arrMines;
let score;


// Istruzioni bottone
buttonPlay.addEventListener('click', function(){

    //Nascondo messaggio iniziale
    elementInfo.classList.add('hidden');

    //Appare contorno griglia
    elementGrid.classList.remove('hidden');

    //Genero griglia completa
    createGrid(n_Cells, elementGrid);

    // generare array con le bombe
    arrMines = generateRandomArray(1, n_Cells, 16);
    console.log(arrMines);

    // inizializziamo il punteggio
    score = 0;
    console.log(score);



});


// FUNZIONI
function createGrid (n_Cells, elementContainer){
    console.log(n_Cells);


    for (let i = 1; i <= n_Cells; i++){
        //Creazione cella con stile css
        const elementCell = document.createElement('div');
        elementCell.innerHTML = i;
        elementCell.classList.add('cell');
        elementContainer.append(elementCell);

        //Aggiunta azione alla cella creata
        elementCell.addEventListener('click', function(){
            if(arrMines.includes(i)) {
                console.log('bomba.' + this.innerHTML);
            this.classList.add('mine');
            console.log(this);
            console.log("hai perso");
            alert ("hai perso ! il tuo punteggio é "  + score)
            ;
            }
            else {
                this.classList.add('clicked');
                score++;
                console.log('Selezionata cella N.' + this.innerHTML);
                if (n_Cells - score == 16) {
                    score ++
                    console.log("hai vinto punteggio massimo " + score);;
                }
            }
        });
    }
}



// Array Random Num generator
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var randomNum;
var arr = [];
function generateRandomArray(min, max, nElements) {



	for (let i = 0; i < nElements; i++) {

		let randomNum;
		do {
			randomNum = getRandomNum(min, max);
		} while (arr.includes(randomNum))

		arr.push(randomNum);
	}

	return arr;
}




