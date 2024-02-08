/*
L'utente clicca su un bottone che
genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Dichiaro la variabile della griglia
const grid = document.getElementById("grid");

for(let i = 0; i < 100; i++){
    // Creo un div
    const newItem = document.createElement("div");
    // gli aggiungo la classe "square"
    newItem.classList.add("square");

    // lo aggiungo alla lista
    grid.append(newItem);
}