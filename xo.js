var messageChange = document.getElementById('symbol');
var winnerClaim = document.getElementById('winner');
var squares = document.querySelectorAll('.square')
var possibility = [
	['a','b','c'],
	['d','e','f'],
	['g','h','i'],
	['a','d','g'],
	['b','e','h'],
	['c','f','i'],
	['a','e','i'],
	['c','e','g']
];
var container = document.querySelector('.container')
//var collection = [];
var xMoves = [];
var oMoves = [];

container.addEventListener('click', function(event) {
	if (event.target.classList.contains('square')) {
		if (event.target.textContent === "") {
			if (xMoves.length > oMoves.length) {
				event.target.textContent = 'O';
				messageChange.textContent = 'X';
				oMoves.push(event.target.id);
			} else {
				event.target.textContent = 'X';
				messageChange.textContent = 'O';
				xMoves.push(event.target.id);
			}
		}
		//collection.push(event.target.id);
		for (var i = 0; i < possibility.length; i++) {
			if (xMoves.includes(possibility[i][0]) && xMoves.includes(possibility[i][1]) && xMoves.includes(possibility[i][2])) {
				possibility[i].forEach(function(id) {
					document.getElementById(id).style.color = 'red';
				})
				winnerClaim.textContent = 'X';
				document.getElementById('end-game').style.display = 'flex';
			} else if (oMoves.includes(possibility[i][0]) && oMoves.includes(possibility[i][1]) && oMoves.includes(possibility[i][2])) {
				possibility[i].forEach(function(id) {
					document.getElementById(id).style.color = 'red';
				})
				winnerClaim.textContent = 'O';
				document.getElementById('end-game').style.display = 'flex';
			} else if ((xMoves.length == 4 && oMoves.length == 5) || (oMoves.length == 4 && xMoves.length == 5)){
				document.getElementById('end-game').style.display = 'flex';
				winnerClaim.textContent = 'NO ONE';
			}
		}
	}
});

var resetButton = document.getElementById('new-game');
var squares = document.querySelectorAll('.square');
var squaresIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
resetButton.addEventListener('click', function(event){
	squaresIds.forEach(function(squareId){
		document.getElementById(squareId).textContent = "";
		document.getElementById(squareId).style.color = 'black';
	})
	// Hide end modal
	document.getElementById('end-game').style.display = 'none';
	// empty the array
	xMoves = [];
	oMoves = [];
});

// var messageChange = document.getElementById('message');
// messageChange.addEventListener('click', function(event){
// document.getElementById('message').textContent = 'This is where you start X';
// document.getElementById('message').textContent = 'This is where you start O';
// });


// var moves = function(event){
// 	if(event.target.style.backgroundColor === "blue" || event.target.style.backgroundColor === "red"){
// 	return;
// }
// var alreadyClicked
// var grid = [a, b, c, d, e, f];
// already.push(a)

// if (event.target.style.backgroundColor = 'blue') {
// 	messageChange.textContent = 'O'
// }
// if (event.target.style.backgroundColor = 'green') {
// 	messageChange.textContent = 'X'
// }




// var idCollected = collection.sort().join('');
// // Check if id combination is in possibility
// if (possibility.indexOf(idCollected) !== -1) {
// 	for (var i = 0; i < collection.length; i++) {
// 		document.getElementById(collection[i]).style.backgroundColor = "red";
// 	}
// }






















// var resetContainer = document.querySelector("reset-container");
// // var resetButton = reset-container;
// resetContainer.addEventListener('click', resetGame);
//
// function resetGame(event) {
// 	console.log(event);
// 	resetContainer.reset();
// }
//
// resetGame();
// var collection = [];
// var columns = ['adg','beh','cfi'];
// var squares = document.querySelectorAll('.square')
// var container = document.querySelector('.container')
// container.addEventListener('click', allThree);
//
// function allThree(event) {
// 	if (event.target.classList.contains('square')) {
// 		collection.push(event.target.id);  //we collect ids
// 		if (collection.length === 3) {
// 			var idCollected = collection.sort().join('');
// 			columns.indexOf(idCollected)
// 			if (columns.indexOf(idCollected) !== -1) {
// 				for (var i = 0; i < collection.length; i++) {
// 					document.getElementById(collection[i]).style.backgroundColor = "red";
// 				}
// 			}
// 			collection = []
// 		}
// 	}
// }
// function allThree(event) {
// 	collection.push(event.target);
// 	if (event.target.classList.contains('square')) {
// 		if (collection[0]) {
// 			if (collection.length === 3){
// 				for (var i = 0; i < collection.length; i++) {
// 					collection[i].style.backgroundColor = 'red';
// 				}
// 			}
// 		}
// 	}
// }



























// var playerO = 'O';
// var playerX = 'X';
// var squares = document.querySelectorAll('.square');
// var rows = document.querySelector('row');
// var container = document.querySelector('.container');
//
// container.addEventListener('click', selectSquare)
// function selectSquare(event) {
// 	// debugger
// 	// squares.textContent = 'X';
// 	if (event.target.classList.contains('square')) {
// 		squares.textContent = 'X';
// 	}
// 	if (event.target.textContent = 'X') {
// 	}
// }












































// var mainContainer = document.querySelector('.container');
// var squares = document.querySelectorAll('.square');
// var rows = document.querySelectorAll('.row');
// var column1 = document.querySelectorAll('.column1');
// var column2 = document.querySelectorAll('.column2');
// var column3 = document.querySelectorAll('.column3');
// var resetButton = document.getElementById('new-game');
// // var column1 = document.querySelectorAll('.column1')
// var player1 = 'x';
// var player2 = 'o';
// var movesPlayer1 = [];
// var movesPlayer2 = [];
//
// mainContainer.addEventListener('click', function(event) {
//   var clickedSquare;
//
//   for (var i = 0; i < squares.length; i++) {
//     // controlla il contenuto del box
//     // se il box e` vuoto ed e` il box dove ho cliccato
//     if (squares[i].textContent === '' && squares[i] === event.target) {
//         // ricorda quale box ho cliccato
//         clickedSquare = squares[i];
//     }
//   }
//   // se i due giocatori hanno lo stesso numero di mosse
//   // il turno e` di player1
//   if (movesPlayer1.length === movesPlayer2.length) {
//       clickedSquare.textContent = player1;
//       movesPlayer1.push(clickedSquare);
//   // se Player1 ha piu mosse di player2, vuole dire che e` il turno di player2
//   } else if(movesPlayer1.length !== 0 && movesPlayer1.length > movesPlayer2.length) {
//       clickedSquare.textContent = player2;
//       movesPlayer2.push(clickedSquare);
//   }
//   // check result for each row
//   for (var i = 0; i < rows.length; i++){
//       checkRow(i);
//   }
//   checkColumn1();
//   checkColumn2();
//   checkColumn3();
//   checkDiagonale();
//   checkDiagonale2();
// });
//
// var checkRow = function(i) {
//   var checkListX = [];
//   var checkListO = [];
//   var boxesRow = rows[i].querySelectorAll('.square');
//   for(var i = 0; i < boxesRow.length; i++) {
//     if(boxesRow[i].textContent === player1) {
//         checkListX.push(boxesRow[i].textContent)
//     } else if (boxesRow[i].textContent === player2) {
//         checkListO.push(boxesRow[i].textContent)
//     }
//   }
//   if (checkListX.length === 3) {
//       console.log('player1 win')
//   }
//   if (checkListO.length === 3) {
//       console.log('player2 win')
//   }
// //   if (movesPlayer1.length + movesPlayer2.length === 9) {
// //       console.log('is a draw');
// //  {
// }
//
// var checkColumn1 = function() {
//   var checkListX = [];
//   var checkListO = [];
//   for (var i = 0; i < column1.length; i++) {
//     if(column1[i].textContent === player1) {
//         checkListX.push(column1[i].textContent)
//     } else if (column1[i].textContent === player2) {
//         checkListO.push(column1[i].textContent)
//     }
//   }
//   if (checkListX.length === 3) {
//       console.log('player1 win')
//   }
//   if (checkListO.length === 3) {
//       console.log('player2 win')
//   }
// }
//
// var checkColumn2 = function() {
//   var checkListX = [];
//   var checkListO = [];
//   for (var i = 0; i < column2.length; i++) {
//     if(column2[i].textContent === player1) {
//         checkListX.push(column2[i].textContent)
//     } else if (column2[i].textContent === player2) {
//         checkListO.push(column2[i].textContent)
//     }
//   }
//   if (checkListX.length === 3) {
//       console.log('player1 win')
//   }
//   if (checkListO.length === 3) {
//       console.log('player2 win')
//   }
// }
//
// var checkColumn3 = function() {
//   var checkListX = [];
//   var checkListO = [];
//   for (var i = 0; i < column3.length; i++) {
//     if(column3[i].textContent === player1) {
//         checkListX.push(column3[i].textContent)
//     } else if (column3[i].textContent === player2) {
//         checkListO.push(column3[i].textContent)
//     }
//   }
//   if (checkListX.length === 3) {
//       console.log('player1 win')
//   }
//   if (checkListO.length === 3) {
//       console.log('player2 win')
//   }
// }
// var checkDiagonale = function() {
//   var checkListX = [];
//   var checkListO = [];
//   for (var i = 0; i < rows.length; i++){
//     var rowSquares = rows[i].querySelectorAll('.square');
//       if(rowSquares[i].textContent === player1) {
//           checkListX.push(rowSquares[i].textContent)
//       } else if (rowSquares[i].textContent === player2) {
//           checkListO.push(rowSquares[i].textContent)
//       }
//   }
//   if (checkListX.length === 3) {
//       console.log('player1 win')
//   }
//   if (checkListO.length === 3) {
//       console.log('player2 win')
//   }
// }
//
// var checkDiagonale2 = function() {
//   var checkListX = [];
//   var checkListO = [];
//
//   var counter = 2;
//
//   for (var i = 0; i < rows.length; i++){
//     var rowSquares = rows[i].querySelectorAll('.square');
//     if(rowSquares[counter].textContent === player1) {
//         checkListX.push(rowSquares[counter].textContent)
//     } else if (rowSquares[counter].textContent === player2) {
//         checkListO.push(rowSquares[counter].textContent)
//     }
//     counter = counter - 1;
//   }
//   if (checkListX.length === 3) {
//       console.log('player1 win')
//   }
//   if (checkListO.length === 3) {
//       console.log('player2 win')
//   }
// }
//
// resetButton.addEventListener('click', function(event) {
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].textContent = '';
//   }
// });
//
// function nextMove(square) {
//   if (document.winner != null) {
//     setMessage(document.winner + " already won the game");
//   }
//   else if (square.innerText == ""){
//     square.innerText = document.turn;
//     switchTurn();
//   } else {
//     setMessage("That square is already used");
//   }
// }
//
// // var playersDraw = function() {
// //   if (movesPlayer1.length === 3) {
// //
// //   }
// // }
// // console.log(playersDraw.length);
// // // playersDraw();
