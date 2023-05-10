// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//selezion elementi nel DOM
const elementInfo = document.querySelector('.info');
const elementGrid = document.querySelector ('.grid');
const buttonPlay = document.querySelector('#play');

// Istruzioni bottone
buttonPlay.addEventListener('click', function(){

    //Nascondo messaggio iniziale
    elementInfo.classList.add('hidden');

    //Appare contorno griglia
    elementGrid.classList.remove('hidden');

    //Numero celle 
    const n_Cells = 100;

    //Genero griglia completa
    createGrid(n_Cells, elementGrid);

    //Reset schermata griglia 
 elementGrid.innerHtml = '';
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
            console.log(this);
            console.log('Selezionata cella N.' + this.innerHTML);
            this.classList.add('clicked');
        });
    }
}