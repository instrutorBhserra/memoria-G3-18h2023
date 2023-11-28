// Class to manage card creation and actions
class CardManager{
    // Attributes
    flippedCards = new Set();
    urlFactory; 

    // Constructor
    constructor(factory){
        this.urlFactory = factory;
    }

    // Generate a new card based in the hero number
    gen(heroNumber){
        const template = document.getElementById('cardTemplate');
        const clone = template.content.cloneNode(true);

        clone.children[0].addEventListener('click', 
             event=>this.onClick(event)
        );

        return clone; // Return the modified clone
    }

    // Handle click events
    onClick(event){
        this.flip(event.target);
    }

    // Flip the received card
    flip(cardNode){
        cardNode.children[0].classList.add('selected');
        // Add the card to the set for checking later
        this.flippedCards.add(cardNode);
    }

    // Unflip the received card
    unFlip(cardNode){
        cardNode.children[0].classList.remove('selected');
    }

    // Set the received card as matched
    disable(cardNode){
        cardNode.children[0].classList.add('matched');
        this.unFlip(cardNode);
    }

}
