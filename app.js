// app.js

let currentIndex = 0;
let isFlipped = false;

// Elementos del DOM
const flashcardElement = document.getElementById('flashcard');
const questionElement = document.getElementById('card-question');
const answerElement = document.getElementById('card-answer');
const categoryElement = document.getElementById('card-category');
const progressElement = document.getElementById('progress-text');

// Inicializar la aplicación
function initApp() {
    if (typeof initialFlashcards === 'undefined' || initialFlashcards.length === 0) {
        questionElement.textContent = "No hay tarjetas cargadas en flashcards.js";
        return;
    }
    renderCard();
}

// Renderizar la tarjeta actual
function renderCard() {
    // Asegurarnos de que la tarjeta vuelva a su posición frontal al cambiar
    isFlipped = false;
    flashcardElement.classList.remove('rotate-y-180');

    const currentCard = initialFlashcards[currentIndex];
    
    // Actualizar textos
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    categoryElement.textContent = currentCard.category || "General";
    
    // Actualizar progreso
    progressElement.textContent = `Tarjeta ${currentIndex + 1} de ${initialFlashcards.length}`;
}

// Voltear la tarjeta
function toggleCard() {
    isFlipped = !isFlipped;
    if (isFlipped) {
        flashcardElement.classList.add('rotate-y-180');
    } else {
        flashcardElement.classList.remove('rotate-y-180');
    }
}

// Avanzar tarjeta
function nextCard() {
    if (currentIndex < initialFlashcards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reiniciar al inicio (bucle)
    }
    renderCard();
}

// Retroceder tarjeta
function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = initialFlashcards.length - 1; // Ir al final
    }
    renderCard();
}

// Atajos de teclado para estudiar más rápido
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Evita el scroll con la barra espaciadora
        toggleCard();
    } else if (event.code === 'ArrowRight') {
        nextCard();
    } else if (event.code === 'ArrowLeft') {
        prevCard();
    }
});

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', initApp);