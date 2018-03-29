console.log('ciao');


var mainBlock = document.querySelector('.container');

var container = []


var putThex = function() {
    container.push(event.target.textContent)
    console.log(container)
}

mainBlock.addEventListener('click', putThex);


