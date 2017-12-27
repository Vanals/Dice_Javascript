$(document).ready(function() {

  dicegame = new DiceGame();

  $('#rollbutton').click(function() {
    if (dicegame.rolls.length === 0) {
      dicegame.rollAndSave()
      $('#rollsscore1').html(`${dicegame.rolls[0]}`)
    } else if (dicegame.rolls.length >= 1) {
      try {
        dicegame.rollAndSave()
        $('#rollsscore2').html(`${dicegame.rolls[1]}`)
      } catch(err) {
        alert(err);
      }
    }
  });

  $('#finalscorebutton').click(function() {
    try {
      $('#totalscore').html(dicegame.getTotalScore());
    } catch(err) {
      alert(err);
    }
  });


});
