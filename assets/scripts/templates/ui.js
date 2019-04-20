'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up').show()
  setTimeout(function () {
    $('#response').text('')
  }, 2000)
  $('#response').text('Successful SignUp!')
  $('#sign-up').fadeOut(2000)
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
  }, 5000)
  $('#response').text('Successful LogIn!')
  $('.authen-container').fadeOut(2000)
  store.user = data.user
  $('#change-password').fadeIn(7000)
  $('#sign-out').fadeIn(7000)
  $('.stats').fadeIn(7000)
  $('#create').fadeIn(7000)
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
  }, 5000)
  $('#sign-out').fadeOut()
  $('.authen-container').fadeIn(4000)
  $('#response').text('Successful SignOut!')
  $('#stats').fadeOut(4000)
  $('#change-password').fadeOut(4000)
  $('.container').fadeOut(4000)
  $('.stats').fadeOut(4000)
  $('#create').fadeOut(4000)
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
