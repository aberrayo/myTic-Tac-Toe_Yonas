'use strict'
const api = require('./gameApi.js')
const ui = require('./gameUi.js')

let a = ['', '', '', '', '', '', '', '', '']

let player = 'X'

let gameOver = false

const turn = function () {
  player = player === 'X' ? 'O' : 'X'
  $('#response').text(`Turn, ${player}`)
}

const winConditions = function (a, player) {
  if ((a[0] === a[1] && a[1] === a[2] && a[0] === player) ||
(a[3] === a[4] && a[4] === a[5] && a[3] === player) ||
(a[6] === a[7] && a[7] === a[8] && a[6] === player) ||
(a[0] === a[4] && a[4] === a[8] && a[0] === player) ||
(a[2] === a[4] && a[4] === a[6] && a[2] === player) ||
(a[0] === a[3] && a[3] === a[6] && a[0] === player) ||
(a[1] === a[4] && a[4] === a[7] && a[1] === player) ||
(a[2] === a[5] && a[5] === a[8] && a[2] === player)) {
    gameOver = true
    $('#stats').text(`${player} wins!`)
  } else if (a.every(index => index !== '')) {
    gameOver = true
    $('#stats').text('Draw!')
  }
}

const endGame = function () {
  if (gameOver === true) {
    $('.container').fadeOut(5000)
    setTimeout(function () {
      $('#stats').text('')
    }, 4000)
    $('#response').hide()
    $('#stats').show()
    player = 'X'
  }
}

const newGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  $('.box').text('')
  $('#stats').text('')
  $('#response').show()
  a = ['', '', '', '', '', '', '', '', '']
  player = 'O'
  gameOver = false
  turn()
}

const getGames = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onClick = function (event) {
  const selector = $(event.target).data('id')
  const content = $(event.target).text()
  if (content === '' && player === 'X') {
    $(event.target).text(player)
    a[selector] = player
    winConditions(a, player)
    api.updateGame(selector, player, gameOver)
    endGame()
    turn()
  } else if (content === '' && player === 'O') {
    $(event.target).text(player)
    a[selector] = player
    winConditions(a, player)
    api.updateGame(selector, player, gameOver)
    endGame()
    turn()
  } else if (content !== '') {
    $('#response').text('Invalid move')
  }
}

const addHandlers = function () {
  $('.box').on('click', onClick)
  $('#create').on('submit', newGame)
  $('.stats').on('submit', getGames)
}

module.exports = {
  addHandlers
}
