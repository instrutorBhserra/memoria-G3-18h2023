// Dom elements
const menu = document.getElementById('menu');
const select = document.getElementById('numCards');
const start = document.getElementById('start');

// Configuring the menu
for ( let i = 4; i<=10; i+=2){
    const n = i*i; // Get i²
    // Create a new option for the select
    const op = document.createElement('option');

    // Set both value and content to i²
    op.value = n;
    op.innerHTML = n;

    // Add the new option to the page
    select.appendChild(op);
}

// Event listeners
start.addEventListener('click', ()=>{
    menu.classList.add('hidden');
    board.classList.remove('hidden');
});

// Development code
start.click();