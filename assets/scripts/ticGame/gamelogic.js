'use strict'
const arr = ['', '', '', '', '', '', '', '', '']

let firstMove = 'x'

const onClick = function (event) {
  event.preventDefault()

firstMove = firstMove === 'X' ? 'O' : 'X'
  $(event.target).text(firstMove)
}
  for (let i = 0; i < $('.unit').length; i++) {
    arr[i] = firstMove
console.log(arr)
console.log(arr.length)
  }

  // const $content = $(event.target)

  /*console.log(arr)
  if (content === '' && firstMove === 'o') {
// function placeTaken () {

  /* if ($content.text() === '' && firstMove === 'o') {
    $(event.target).text(firstMove)
    console.log(event.target)*/
    //$(cell).text(firstMove)
    //arr[event.target] = firstMove
  //  firstMove = 'x'
  /*} else {
    console.log(event.target) */
//  }
// $(cell).text(firstMove)
// arr[event.target] = firstMove
//  firstMove = 'x'
/* } else {
    // alert('Cand Do That!')
  }
}*/
function button () {
  location.reload()
}
const addHandlers = function () {
  $('.unit').on('click', onClick)
  console.log(addHandlers)
  $('#button').on('click', button)
  $('#account-wrapper').hide()
}
 //let gameOver = false
//const checkWin = function (arr) {
module.exports = {
  addHandlers
}
