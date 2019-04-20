'use strict'
const store = require('../store')

const getGamesSuccess = function (games) {
  const numberOfGamesPlayed = games.games.length
  setTimeout(function () {
    $('#response').text('')
  }, 2500)
  $('#response').text('Games Played: ' + numberOfGamesPlayed)
  $('#getGames').show()
  $('#response').show()
}

const getGamesFailure = function (data) {
  $('.stats').text('Try Again.')
}

const createGameSuccess = function (data) {
  store.game = data.game
  $('.box').text('')
  $('.container').show()
}

const createGameFailure = function () {
  $('#response').text('Try again')
}

const updateSuccess = function (data) {
}

const updateFailure = function () {
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  updateSuccess,
  updateFailure
}
