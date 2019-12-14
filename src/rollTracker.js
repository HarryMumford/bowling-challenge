function RollTracker(pins) {
  this.currentRollNumber = 1;
}

RollTracker.prototype.roll = function() {
  return this.currentRollNumber;
}

RollTracker.prototype.getCurrentRollNumber = function() {
  return this.currentRollNumber;
}



