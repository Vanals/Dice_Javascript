(function(exports) {

  function Dice() {

  }

  Dice.prototype._roll = function() {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

exports.Dice = Dice;
})(this)
