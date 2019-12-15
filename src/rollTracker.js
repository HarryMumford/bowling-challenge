function RollTracker(pins) {
  this.currentRollNumber = 1;
  this.rollCount = 0;
  this.rollScoreLog = [];
}

RollTracker.prototype.roll = function(pins) {
  this._updateRollScore(pins);
  this.rollCount ++;
  this._updateRollNumber();
  // console.log(`roll count: ${this.rollCount}`);
  // console.log(`roll number: ${this.currentRollNumber}`);
}

RollTracker.prototype.getRollScoreLog = function() {
  return this.rollScoreLog;
}

RollTracker.prototype.getRollCount = function() {
  return this.rollCount;
}

RollTracker.prototype.getCurrentRollNumber = function() {
  return this.currentRollNumber;
}

// private functions below

RollTracker.prototype._isFirstRollOfFrame = function() {
  return (this.rollCount % 2 === 0) && this.rollCount < 20;
}

RollTracker.prototype._updateRollNumber = function() {
  if(this._isFirstRollOfFrame()) {
    this.currentRollNumber = 1;
  } else {
    this.currentRollNumber ++;
  }
}

RollTracker.prototype._updateRollScore = function(pins) {
  this.rollScoreLog.push(pins);
  if(this.currentRollNumber === 1 && pins === 10) {
    this.rollScoreLog.push(0);
    this.rollCount ++;
  }
}
