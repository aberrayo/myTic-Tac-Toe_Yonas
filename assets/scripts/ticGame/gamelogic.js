'use strict'

const checkWinner = function () {
  const unit1 = $('#unit1'),
        unit2 = $('#unit2'),
        unit3= $('#unit3'),
        unit4 = $('#unit4'),
        unit5 = $('#unit5'),
        unit6 = $('#unit6'),
        unit7 = $('#unit7'),
        unit8 = $('#unit8'),
        unit9 = $('#unit9')

if (unit1.html()!== '' && unit1.html() === unit2.html() && unit1.html()===unit3.html()) {

    console.log('winner')

}
else if(unit4.html()!==''&& unit4.html() === unit5.html() && unit4.html()===unit6.html()) {

    console.log('winner')
}

else if(unit7.html()!==''&& unit7.html() === unit8.html() && unit7.html()===unit9.html()) {
    console.log('winner')
}

else if (unit1.html()!==''&& unit1.html() ===  unit4.html() && unit1.html()===unit7.html()) {
    console.log('winner')
}

else if (unit2.html()!==''&& unit2.html() === unit5.html() && unit2.html()===unit8.html()) {
    console.log('winner')
}

else if (unit3.html()!==''&& unit3.html() === unit6.html() && unit3.html()===unit9.html()) {
    console.log('winner')
}

else if (unit1.html()!==''&& unit1.html() === unit5.html() && unit1.html()===unit9.html()) {
    console.log('winner')
}

else if (unit3.html()!==''&& unit3.html() === unit5.html() && unit1.html()===unit7.html()) {
    console.log('winner')
}
}
let playerCurrent = 'X'
const nextTurn = function() {
  if(playerCurrent==='X'){
    playerCurrent = 'O'
  } else {
    playerCurrent = 'X'
  }
}
const onClick = function (event) {
  event.preventDefault()
  console.log('button is clicked')
}

$('.unit').on('click', onClick)
