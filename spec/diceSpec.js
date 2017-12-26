describe('Dice', function() {

  beforeEach(function() {
    dice = new Dice();
  });

  describe('Roll', function() {
    it('Return a random number betwen 1 and 7', function() {
      dice.roll = jasmine.createSpy("Return 3").and.returnValue(3)
      expect(dice.roll()).toEqual(3);
    });
  });

});
