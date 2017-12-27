$(document).ready(function() {

  dicegame = new DiceGame();

  $('#rollbutton').click(function() {
    if (dicegame.rolls.length === 0) {
      dicegame.rollAndSave()
      $('#rollsscore1').html(`You rolled ${dicegame.rolls[0]}!`)
    } else if (dicegame.rolls.length >= 1) {
      try {
        dicegame.rollAndSave()
        $('#rollsscore2').html(`You rolled ${dicegame.rolls[1]}!`)
      } catch(err) {
        alert(err);
      }
    }
  });

  $('#finalscorebutton').click(function() {
    try {
      $('#totalscore').html(dicegame.getTotalScore());
      showFinalFunnySentence()
    } catch(err) {
      alert(err);
    }
  });

  $('#resetgame').click(function() {
    dicegame.resetScore()
    $('#rollsscore1').html(``)
    $('#rollsscore2').html(``)
    $('#totalscore').html(``)
    $('#funnyfinalsentence').html(``)
  });

  function showFinalFunnySentence() {
    $('#funnyfinalsentence').html(dicegame.finalFunnySentence())
  }
});
