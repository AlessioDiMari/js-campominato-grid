// Dichiaro il contenitore della griglia
const gridContainer = document.getElementById('gridContainer');

// Dichiaro il bottone che creerà la griglia
const createGridButton = document.getElementById('create-grid-button');

// Dichiaro il menu a discesa che selezionerà la dimenzione della griglia
const gridSizeSelect = document.getElementById('sizes-grid');

function createGrid(size) {
    // Svuoto il contenitore della griglia da 
    // eventuali elementi precedenti indesiderati
    gridContainer.innerHTML = '';

    // Creo un doppio ciclo for per creare le celle
    // all'interno della griglia

    // Il primo servirà per le righe
    for (let i = 0; i < size; i++) {
        // Il secondo per le colonne
        for (let j = 0; j < size; j++) {
            // Creo la cella
            const cell = document.createElement('div');
            // Aggiungo la classe si stilizzazione
            cell.classList.add('cell');
            // Inserisco la cella nella griglia
            gridContainer.appendChild(cell);
        }
        // Aggiungo un <br> per far si che la riga
        // successiva sia sotto la precendente
        const aCapo = document.createElement('br');
        gridContainer.appendChild(aCapo);
    }
}

// Creo l'event listener che richiamerà la funzione
createGridButton.addEventListener('click', function() {
    // Dichiaro la variabile "size" che sta dentro
    // la funzione "createGrid"
    const gridSize = parseInt(gridSizeSelect.value);
    if (!isNaN(gridSize) && gridSize > 0) {
        createGrid(gridSize);
    } else {
        alert('Seleziona una dimensione valida!');
    }
});
