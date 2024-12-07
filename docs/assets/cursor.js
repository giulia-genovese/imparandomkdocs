document.addEventListener('DOMContentLoaded', function() {
    var cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);

    document.addEventListener('mousemove', function(event) {
        cursorTrail.style.left = event.pageX + 'px';
        cursorTrail.style.top = event.pageY + 'px';
    });
});
// Un array che tiene traccia delle immagini della scia
let trail = [];

// Numero di immagini da tenere nella scia
let trailLength = 20; 

// Funzione che crea l'effetto della scia
function createCursorTrail(event) {
    // Crea una nuova immagine che segue il cursore
    let trailElement = document.createElement('div');
    trailElement.classList.add('cursor-trail');
    document.body.appendChild(trailElement);
    
    // Posiziona l'immagine dove si trova il cursore
    trailElement.style.left = $event.pageX}px;
    trailElement.style.top = $event.pageYpx;
    
    // Aggiungi questa immagine alla scia
    trail.push(trailElement);
    
    // Se ci sono più immagini della scia di quelle che vogliamo, rimuoviamo la più vecchia
    if (trail.length > trailLength) {
        let firstElement = trail.shift(); // Rimuove il primo elemento
        firstElement.remove(); // Elimina l'immagine dalla pagina
    }

// Quando il mouse si muove, crea la scia
document.addEventListener('mousemove', createCursorTrail);