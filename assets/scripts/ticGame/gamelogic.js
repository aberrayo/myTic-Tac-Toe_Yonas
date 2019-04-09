'use strict'
// const arr = ['', '', '', '', '', '', '', '', '']
let firstMove = 'x'

const onClick = function (event) {
  event.preventDefault()

  firstMove = firstMove === 'X' ? 'O' : 'X'
  $(event.target).text(firstMove)
}

/* console.log(arr)
  if (content === '' && firstMove === 'o') {
    $(event.target).text(firstMove)
    console.log(event.target) */
// $(cell).text(firstMove)
// arr[event.target] = firstMove
//  firstMove = 'x'
/* } else {
    // alert('Cand Do That!')
  }
} */

 /*let gameOver = false
const checkWin = function (arr) {
 if  ((arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === firstMove) ||
(arr[3] === arr[4] && arr[4] === arr[5] && arr[3] === firstMove) ||
(arr[6] === arr[7] && arr[7] === arr[8] && arr[6] === firstMove) ||
(arr[0] === arr[4] && arr[4] === arr[8] && arr[0] === firstMove) ||
(arr[2] === arr[4] && arr[4] === arr[6] && arr[2] === firstMove) ||
(arr[0] === arr[3] && arr[3] === arr[6] && arr[0] === firstMove) ||
(arr[1] === arr[4] && arr[4] === arr[7] && arr[1] === firstMove) ||
(arr[2] === arr[5] && arr[5] === arr[8] && arr[2] === firstMove)) {
    gameOver = true
    alert(firstMove + ' is the winner!')
  } else if (arr.length === 9) {
    console.log('Draw')
    // gameOver = true
    console.log('its a tie! ')
  }
}*/

function button () {
  location.reload()
}
const addHandlers = function () {
  $('.unit').on('click', onClick)
  $('#button').on('click', button)
  $('#account-wrapper').hide()
}

module.exports = {
  addHandlers
}
