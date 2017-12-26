function Dice(faces = 7) {
  this.faces = faces

  Dice.prototype.roll = function() {
    min = Math.ceil(1);
    max = Math.floor(faces + 1);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

}
