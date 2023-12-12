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

        // Get a reference to the image element
        const img = clone.querySelector('img');

        // Change the source of the image
        img.setAttribute('src', this.urlFactory(heroNumber));

        // Handle card clicks
        clone.children[0].addEventListener('click', 
             event=>this.onClick(event)
        );

        return clone; // Return the modified clone
    }

    // Handle click events
    onClick(event){
        if(this.flippedCards.size == 2 ){
            this.endTurn();
        }else{
            this.flip(event.target);
        }
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

    // Turn methods

    // Check if is a match
    check(){
        const urls = [...this.flippedCards].map((card)=> card.querySelector('img').src);
        return urls[0]==urls[1];
    };


    // // Finsh a turn
    endTurn(){
        // Choose the function to end the turn
        // If is a match, disable cards
        // Else unflip the cards
        const handler = this.check()?(card)=>this.disable(card):this.unFlip;
        // Run the handler in both flipped cards
        this.flippedCards.forEach(handler);
        // Empty the set
        this.flippedCards.clear();
    }

}
