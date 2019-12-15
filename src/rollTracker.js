function RollTracker(pins) {
  this.currentRollNumber = 1;
  this.rollCount = 0;
  this.rollScoreLog = [];
}

RollTracker.prototype.roll = function(pins) {
  this._updateRollScore(pins);
  this.rollCount ++;
  this._updateRollNumber();
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
  return (this.rollCount % 2 === 0) && this.rollCount < 19;
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
  if(this.rollCount < 18 && pins === 10) {
    this.rollScoreLog.push(0);
    this.rollCount ++;
  }
}
