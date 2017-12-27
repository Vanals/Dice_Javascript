function DiceGame(dice = Dice) {
  this.dice = new dice();
  this.rolls = []

}

DiceGame.prototype.rollAndSave = function () {
  if (this.rolls.length === 2) throw "You can roll only 2 times, now check your final score."
  this.rolls.push(this.dice._roll())
};

DiceGame.prototype.getTotalScore = function () {
  if (this.rolls.length != 2) throw "You have to roll the dice two times to get the final score."
  return this.rolls.reduce((a, b) => a + b)
};

DiceGame.prototype.resetScore = function () {
  this.rolls = []
};

DiceGame.prototype.finalFunnySentence = function () {
  if (this.rolls.reduce((a, b) => a + b) <= 5) {
    return "Bad day, eh?"
  } else if (this.rolls.reduce((a, b) => a + b) > 5 && this.rolls.reduce((a, b) => a + b) < 10) {
    return "Good, not bad!"
  } else if (this.rolls.reduce((a, b) => a + b) >= 10){
    return "Wow! Lucky you!"
  }
};
