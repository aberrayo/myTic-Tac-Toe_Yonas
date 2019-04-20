'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up').show()
  setTimeout(function () {
    $('#response').text('')
  }, 2000)
  $('#response').text('Successful SignUp!')
  $('#sign-up').hide(1000)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  setTimeout(function () {
    $('#response').text('')
  }, 3000)
  $('#response').text('Error, Try again!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  setTimeout(function () {
    $('#response').text('')
  }, 3000)
  $('#response').text('Successful LogIn!')
  $('.authen-container').hide()
  store.user = data.user
  $('#change-password').show()
  $('#sign-out').show()
  $('.stats').show()
  $('#create').show()
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  setTimeout(function () {
    $('#response').text('')
  }, 2000)
  $('#message').text('Error, Try again!')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
  $('#change-password').show()
  $('#response').text('Successful')
  $('#response').show()
  $('.container').hide(500)
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  setTimeout(function () {
    $('#response').text('')
  }, 2000)
  $('#response').text('Error, try again.')
  $('#response').show()
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  setTimeout(function () {
    $('#response').text('')
  }, 3000)
  $('#sign-out').hide()
  $('.authen-container').show()
  $('#response').text('Successful SignOut!')
  $('#stats').hide()
  $('#change-password').hide()
  $('.container').hide()
  $('.stats').hide()
  $('#create').hide()
  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#sign-out').text('Error, try again!')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
