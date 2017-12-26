describe('DiceGame', function() {

  beforeEach(function () {
    dicegame = new DiceGame();
  });

  describe('Roll_Save', function() {

    it('Roll the dice and save the score', function() {
      dicegame.dice.roll = jasmine.createSpy('Return 3').and.returnValue(3)
      dicegame.roll_save()
      expect(dicegame.roll1).toEqual(3);
    })

  });

});
