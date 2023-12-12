// Class to manage borar actions
class BoardManager {
    // Dependencies
    cardManager; // Object to manipulate cards inside the board

    // DOM elements
    node; // The DOM element refering to the board

    // Numbers 
    numImgs; // Number of different images in the library
    curNumCards; // Current number of cards in the board

    // Constructor
    constructor(id, numImgs, cardManager) {
        // Get the board node using the received id
        this.node = document.getElementById(id);
        // Set the other properties
        this.numImgs = numImgs;
        this.cardManager = cardManager;
    }

    // Clear the board removing all cards
    clear() {
        this.node.innerHTML = '';
    }

    // Add the received number of cards to the board
    fill(numberCards) {
        // Test if there isn't enough images
        if (numberCards > 2 * this.numImgs) {
            console.error(`Error: Not enough images for ${numberCards} cards.`)
            numberCards = 2 * this.numImgs;
        }
        this.clear(); // Reset the board

        // Setting the current number of cards
        this.curNumCards = parseInt(numberCards);

        this.genRandomList(this.curNumCards).forEach(
            number=>this.addCard(this.cardManager.gen(number))
        );

        this.adjustCss();
    }

    // Adjust the CSS to fit all card in the board
    adjustCss() {
        // Calculating the number of columns
        const cols = Math.sqrt(this.curNumCards);
        // Calculating the card size
        const size = (100 / cols - 1) + 'vmin';

        // Setting the CSS properties
        document.documentElement.style.setProperty('--numCols', cols);
        document.documentElement.style.setProperty('--size', size);
    }

    // Add one card to the board
    addCard(card) {
        this.node.appendChild(card);
    }

    // Generate random list
    genRandomList(size) {
        const list = Array(size / 2).fill().map((_, i) => i + 1);
        return [...list, ...list].sort(() => Math.random() - .5);
    }

    // Check if all cards are found
    check(){
        const flipped = document.getElementsByClassName('matched');
        return flipped.length >= this.curNumCards;
    }
}