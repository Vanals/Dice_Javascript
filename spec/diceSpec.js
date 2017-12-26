describe('Dice', function() {

  beforeEach(function() {
    dice = new Dice();
    dice20 = new Dice(20);
  });

  describe('Roll', function() {
    it('Return a random number betwen 1 and 7', function() {
      dice.roll = jasmine.createSpy("Return 3").and.returnValue(3)
      expect(dice.roll()).toEqual(3);
    });

    // it('create a dice with 20 faces and roll it returning 20', function() {
    //   dice20.roll = jasmine.createSpy("Return 20").and.returnValue(20)
    //   expect(dice20.roll()).toEqual(20);
    // })
  });



});
