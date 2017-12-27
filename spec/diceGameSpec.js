describe('DiceGame', function() {

  beforeEach(function () {
    dicegame = new DiceGame();
  });

  describe('rollAndSave', function() {

    it('Roll the dice and save the score of the first roll in the array', function() {
      dicegame.dice._roll = jasmine.createSpy('Return 3').and.returnValue(3)
      dicegame.rollAndSave()
      expect(dicegame.rolls[0]).toEqual(3);
    });

    it('Raise up an error if you try to make more than 2 rolls',function() {
      dicegame.rollAndSave()
      dicegame.rollAndSave()
      expect(function() {
        dicegame.rollAndSave()
      }).toThrow("You can roll only 2 times, now check your final score.")
    });
  });

  describe('getTotalScore', function() {
    it('Return the total score after two rolls',function() {
      dicegame.dice._roll = jasmine.createSpy('Return 3').and.returnValue(3)
      dicegame.rollAndSave()
      dicegame.rollAndSave()
      expect(dicegame.getTotalScore()).toEqual(6);
    });
    it('Raise up an error if you try to get the final score without have rolled the dice twice',function() {
      expect(function() {
        dicegame.getTotalScore()
      }).toThrow("You have to roll the dice two times to get the final score.")
    });
  });

  describe('resetScore', function() {
    it('Reset the score, allowing you to roll again', function() {
      dicegame.rollAndSave()
      dicegame.rollAndSave()
      dicegame.resetScore()
      expect(dicegame.rolls).toEqual([]);
    });
  });

  describe('finalFunnySentence', function() {
    it('Return a funny sentence if final score <= 5', function() {
      dicegame.dice._roll = jasmine.createSpy('Return 1').and.returnValue(1)
      rollTwiceAndGetFinalScore()
      expect(dicegame.finalFunnySentence()).toEqual("Bad day, eh?");
    });

    it('Return a funny sentence if final score > than 5 and < than 10', function() {
      dicegame.dice._roll = jasmine.createSpy('Return 1').and.returnValue(3)
      rollTwiceAndGetFinalScore()
      expect(dicegame.finalFunnySentence()).toEqual("Good, not bad!");
    });

    it('Return a funny sentence if final score > than 10', function() {
      dicegame.dice._roll = jasmine.createSpy('Return 1').and.returnValue(6)
      rollTwiceAndGetFinalScore()
      expect(dicegame.finalFunnySentence()).toEqual("Wow! Lucky you!");
    });

  });
});
