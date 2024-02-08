/*
L'utente clicca su un bottone che
genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.
*/


// Dichiaro il contenitore della griglia
const gridContainer = document.getElementById("container-grid");

// Dichiaro il bottone che creerà la griglia
const createGrid = document.getElementById("create-grid");

// Dichiaro il menu a discesa che selezionerà la dimensione della griglia
const sizesGrid = document.getElementById("sizes-grid");

// Creo una funzione che genererà la griglia al click del bottone
// Inoltre do una variabile a cui la funzione deve
// far riferimento

function creaGriglia(size){
    // Svuoto il contenitore della griglia da 
    // eventuali elementi precedenti indesiderati
    gridContainer.innerHTML = '';

    // Creo un doppio ciclo for per creare le celle
    // all'interno della griglia

    // Il primo servirà per le righe
    for(let i = 0; i < size; i++){
        // Il secondo per le colonne
        for(let j = 0; j < size; j++){
            // Creo la cella
            const cell = document.createElement("div");
            // aggiungo una classe di stilizzazione
            cell.classList.add("cell");
            // inserisco la cella alla griglia
            gridContainer.append(cell);
        }
        // aggiungo un <br> per far si che la riga 
        // successiva sia sotto la precedente e non accanto
        const aCapo = document.createElement("br");
        gridContainer.appendChild(aCapo);
    }
}