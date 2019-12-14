'use strict';

var rt;

describe('RollTracker', function() {
  beforeEach(function() {
    rt = new RollTracker(1);
  })

  it('on first roll, roll number is 1', function() {
    rt.roll(1);
    expect(rt.getCurrentRollNumber()).toEqual(1);
  })

  // it('on second roll, roll number is 2', function() {
  //   expect(rt.getCurrentRollNumber()).toEqual(1);
  // })
})  