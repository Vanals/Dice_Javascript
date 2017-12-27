$(document).ready(function() {

  dicegame = new DiceGame();

  $('#rollbutton').click(function() {
    dicegame.rollAndSave()
    if (dicegame.rolls.length === 1) {
      $('#rollsscore1').html(`${dicegame.rolls[0]}`)
    } else if (dicegame.rolls.length === 2) {
      $('#rollsscore2').html(`${dicegame.rolls[1]}`)
    }
  });

  
});
