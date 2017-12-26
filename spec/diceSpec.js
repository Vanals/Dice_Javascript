describe('Dice', function() {

  beforeEach(function() {
    var dice = new Dice();
  });

  describe('#Roll', function() {
    it('return a random number betwen 1 and 7', function() {
      dice.roll() = jasmine.createSpy("Return 3").and.returnValue(3)
      expect(dice.roll()).toEqual(3);
    })
  })

});

// airport.weather.isstormy = jasmine.createSpy("Clear weather").and.returnValue(false)
