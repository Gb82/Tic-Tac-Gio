
var mainContainer = document.querySelector('.container');
var squares = document.querySelectorAll('.square');
var player1 = 'x';
var player2 = 'o';
var movesPlayer1 = [];
var movesPlayer2 = [];
var row = mainContainer.querySelector('.row1');

mainContainer.addEventListener('click', function(event) {
    var playerMove;

    for (var i = 0; i < squares.length; i++) {
        // coontrolla il contenuto del box
        // se il box e` vuoto ed e` il box dove ho cliccato
        if (squares[i].textContent === '' && squares[i] === event.target) {
            // playerMove ha un box
            playerMove = squares[i];
        } 
    }
    // controllo che playerMove non sia indefinito (undefined are false values)
    if (playerMove) {
        // se i due giocatori hanno lo stesso numero di mosse
        // il turno e` di player1
        if (movesPlayer1.length === movesPlayer2.length) {
            playerMove.textContent = player1; 
            movesPlayer1.push(playerMove);
        // se Player1 ha piu mosse di player2, vuole dire che e` il turno di player2
        } else if(movesPlayer1.length !== 0 && movesPlayer1.length > movesPlayer2.length) {
            playerMove.textContent = player2;
            movesPlayer2.push(playerMove);
        }
    }
    checkRow();
});

var checkRow = function() {

    var boxesFirstRow = row.querySelectorAll('.square');
    var checkListX = [];
    var checkListO = [];
    for(var i = 0; i < boxesFirstRow.length; i++) {
        if(boxesFirstRow[i].textContent !== '') {
            if(boxesFirstRow[i].textContent === player1) {
                checkListX.push(boxesFirstRow[i].textContent)
            } else if (boxesFirstRow[i].textContent === player2) {
                checkListO.push(boxesFirstRow[i].textContent)


            }
        }
        
    }
    if (checkListX.length === 3) {
        console.log('player1 win')
    }
    if (checkListO.length === 3) {
        console.log('player2 win')
    }    

}


console.log(row)

// dobbiamo scoprire chi ha vinto assicurandoci ke:
// riga, colonna o diagonale abbiano lo stesso valore
// devo controllare 8 possibilita se il giocatore ha vinto 


