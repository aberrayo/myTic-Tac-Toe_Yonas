const startGameSuccess = function (data) {
  $('#account-page-message').css('background-color', '#5cb85c')
  $('#current-game').text(store.gameId)
  $('#game-wrapper').show('slow')
  $('#numeric-game-wrapper').hide()
}

const startGameFailure = function (error) {

 $(() => {
  authEvents.addHandlers()
  $('#account-wrapper').hide()
  $('#game-wrapper').hide()
  $('#numeric-game-wrapper').hide()
  $('#account-navbar').hide()
  $('#show-all').on('submit', onShowAll)
  $('#hide-all').on('submit', onHideAll)
