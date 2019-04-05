'use strict'

const arr = ['', '', '', '', '', '', '', '', '']
let move = 'x'
const onClick = function (event) {
  event.preventDefault()
  const cell = event.target

  if (move==='X') {
    move = 'O'

  /*  $(cell).text(move)
    arr[cell] = move
    checkWin(arr, move)
    move = 'o'*/
  }else  {
    move = 'X'
  }

  const content = $(cell).text(move)
  console.log(move)
  if (content === '' && move === 'o') {
    (event.target.id).text(move)
    arr[cell] = move
    checkWin(arr, move)
    move = 'x'
  } else {
    //alert('Cand Do That!')
  }
}

let gameOver = false
const checkWin = function (arr, move) {
  console.log(checkWin)
  console.log(move)
  if
  ((arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === move) ||
(arr[3] === arr[4] && arr[4] === arr[5] && arr[3] === move) ||
(arr[6] === arr[7] && arr[7] === arr[8] && arr[6] === move) ||
(arr[0] === arr[4] && arr[4] === arr[8] && arr[0] === move) ||
(arr[2] === arr[4] && arr[4] === arr[6] && arr[2] === move) ||
(arr[0] === arr[3] && arr[3] === arr[6] && arr[0] === move) ||
(arr[1] === arr[4] && arr[4] === arr[7] && arr[1] === move) ||
(arr[2] === arr[5] && arr[5] === arr[8] && arr[2] === move)) {
    gameOver = true
    alert(move + ' is the winner!')
  } else if (arr.every(index => index !== '')) {
    //gameOver = true
    console.log('its a tie! ')
  }
}
const addHandlers = function () {
  $('.unit').on('click', onClick)
  console.log(addHandlers)
  /*$('#new-game').on('click', onNewGame)
  $('#new-user').on('click', newUserclick)
  $('#returning-user').on('click', returningUserclick)
  $('#user-management').on('click', accountClick)
  $('#reset-game').on('click', resetClick)8*/
}
module.exports = {
  addHandlers
}
