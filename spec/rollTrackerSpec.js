'use strict';

var rt;

describe('RollTracker', function() {
  beforeEach(function() {
    rt = new RollTracker(1);
  })

  describe('roll counting', function(){
    it('knows the roll count', function() {
      rt.roll();
      rt.roll();
      rt.roll();
      expect(rt.getRollCount()).toEqual(3);
    })

    it('it logs a strike as 2 rolls (before 10th frame)', function() {
      rt.roll(10);
      rt.roll(10);
      expect(rt.getRollCount()).toEqual(4);
    })
  })

  describe('roll number', function(){

    it('roll number is 2 on 2nd roll', function() {
      rt.roll();
      expect(rt.getCurrentRollNumber()).toEqual(2);
    })

    it('roll number is 1 on 3rd roll', function() {
      rt.roll();
      rt.roll();
      expect(rt.getCurrentRollNumber()).toEqual(1);
    })

    it('roll number is 3 on 21st roll (1st strike bonus roll)', function() {
      var i;
      for(i = 1; i <= 20; i++) {
        rt.roll();
      }
      expect(rt.getCurrentRollNumber()).toEqual(3);
    })
  })

  describe('roll score', function() {
    it('logs 0 when 0 is rolled', function() {
      rt.roll(0);
      expect(rt.getRollScoreLog()[0]).toEqual(0);
    })

    it('logs 10 when 10 is rolled second', function() {
      rt.roll(0);
      rt.roll(10);
      expect(rt.getRollScoreLog()[1]).toEqual(10);
    })

    it('logs 10 then 0 if 10 is rolled first (before 10th frame)', function() {
      rt.roll(10);
      expect(rt.getRollScoreLog()).toEqual([10, 0]);
    })
    
    it('only logs 10 if 10 is rolled on the 19th roll (1st strike bonus roll)', function() {
      var i;
      for(i = 1; i <= 18; i++) {
        rt.roll();
      }
      rt.roll(10);
      expect(rt.getRollScoreLog()[19]).not.toEqual(0);
    }) 
  })
})  

// for debugging...

function _getVisibilityBeforeEvent() {
  console.log(`before...`);
  console.log(`score log = ${rt.getRollScoreLog()}`);
  console.log(`roll count = ${rt.getRollCount()}`);
}

function _getVisibilityAfterEvent() {
  console.log(`after...`);
  console.log(`score log = ${rt.getRollScoreLog()}`);
  console.log(`roll count = ${rt.getRollCount()}`);
}

