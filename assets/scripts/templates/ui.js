'use strict'
const store = require('../store')
const signUpSuccess = function (data) {
  console.log('sign up success ran with the data:', data)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  console.log('sign up success ran with the data:', data)
}
const changePwSuccess = function (data) {
  console.log('sign up success ran with the data:', data)
  store.user = data.user
}

const changePwFailure = function (data) {
  console.log('sign up success ran with the data:', data)
}
const signInSuccess = function (data) {
  console.log('sign in success ran with the data:', data)
  store.user = data.user
}

const signInFailure = function (data) {
  console.log('sign in success ran with the data:', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  changePwSuccess,
  changePwFailure,
  signInSuccess,
  signInFailure
}
