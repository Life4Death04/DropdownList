const optionsContainer = document.querySelector('.options-container');
const display = document.querySelector('#displayElement')
const caret = document.querySelector('.caret');

const options = document.getElementsByClassName('item');

function showOptions(){
    optionsContainer.classList.toggle('hidden');
    caret.classList.toggle('rotate');
}

/* optionsContainer.addEventListener('click', function(e){
    display.innerText = e.target.innerText;
    optionsContainer.classList.toggle('hidden');
    caret.classList.toggle('rotate');
}) */

for(i = 0; i < options.length; i++){ //This is to add the event to each element, then, depending I values it will change or add text.
    /*If you pay atenttion it's same shit but with a loop 'for' to add the event */
    options[i].addEventListener('click', function(e){
        let optionSelected = e.target;
        display.innerText = optionSelected.innerText;
        optionsContainer.classList.toggle('hidden');
        caret.classList.toggle('rotate');
    })
}
