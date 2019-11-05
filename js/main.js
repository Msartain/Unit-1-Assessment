//state
let tally = 0;

//cached elements

let tallyDisp = document.getElementById('number');
let input = document.getElementById('value');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

//event listeners

plus.addEventListener('click', function(){
    tally += parseInt(input.value);
    render()
});

minus.addEventListener('click', function(){
    tally -= parseInt(input.value);
    render()
});

//functions

function init(){
    tallyDisp.textContent = tally;
    input.value = 1;
}

function render(){
    tallyDisp.style.color = tally < 0 ? 'red' : 'black';
    tallyDisp.textContent = tally;
}

init();
