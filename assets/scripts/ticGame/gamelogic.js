'use strict'
const arr = ['', '', '', '', '', '', '', '', '']

let firstMove = 'x'

const onClick = function (event) {
  event.preventDefault()

firstMove = firstMove === 'X' ? 'O' : 'X'
  $(event.target.unit1).text(firstMove)
  for (let i = 0; i < $('.unit').length; i++) {
    arr[i] = firstMove
console.log(arr)
console.log(arr.length)
  }

  // const $content = $(event.target)

// function placeTaken () {

  /* if ($content.text() === '' && firstMove === 'o') {
    $(event.target).text(firstMove)
    console.log(event.target) */
//  }
}
// $(cell).text(firstMove)
// arr[event.target] = firstMove
//  firstMove = 'x'
/* } else {
    // alert('Cand Do That!')
  }
} */

 let gameOver = false
const checkWin = function (arr) {
  console.log(checkWin)
  console.log(firstMove)
  if ((arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === firstMove) ||
(arr[3] === arr[4] && arr[4] === arr[5] && arr[3] === firstMove) ||
(arr[6] === arr[7] && arr[7] === arr[8] && arr[6] === firstMove) ||
(arr[0] === arr[4] && arr[4] === arr[8] && arr[0] === firstMove) ||
(arr[2] === arr[4] && arr[4] === arr[6] && arr[2] === firstMove) ||
(arr[0] === arr[3] && arr[3] === arr[6] && arr[0] === firstMove) ||
(arr[1] === arr[4] && arr[4] === arr[7] && arr[1] === firstMove) ||
(arr[2] === arr[5] && arr[5] === arr[8] && arr[2] === firstMove)) {
    gameOver = true
    alert(firstMove + ' is the winner!')
  } else if (array.length === 9) {
    console.log('Draw')
    //gameOver = true
    console.log('its a tie! ')
  }
}
function button () {
  location.reload()
}
const addHandlers = function () {
  $('.unit').on('click', onClick)
  $('#button').on('click', button)
  $('#account-wrapper').hide()
}
  console.log(checkWin)
  /*$('#new-game').on('click', onNewGame)
  $('#new-user').on('click', newUserclick)
  $('#returning-user').on('click', returningUserclick)
  $('#user-management').on('click', accountClick)
  $('#reset-game').on('click', resetClick)8*/

module.exports = {
  addHandlers
}
