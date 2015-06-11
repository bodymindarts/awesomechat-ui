'use strict';

var ScoreGenerator = require('../../src/domain/ScoreGenerator');

describe('ScoreGenerator', function() {

  it('generates a score given a date', function() {

    var year = 2000;
    var month = 11;
    var day = 2;
    var millisecondsTotal = 33333333;
    var secondsTotal = Math.floor(millisecondsTotal / 1000);

    var hours = Math.floor(secondsTotal / 3600);
    var minutes = Math.floor((secondsTotal - hours * 3600) / 60);
    var seconds = (secondsTotal - hours * 3600 - minutes * 60 );
    var milliSeconds = millisecondsTotal - secondsTotal * 1000;

    var utcDate = Date.
      UTC(year, month, day, hours, minutes, seconds, milliSeconds);
    var date = new Date(utcDate);

    expect(ScoreGenerator.forDate(date)).to.equal('2000110233333333');

    utcDate = Date.
      UTC(year, month, day, 0, 0, 0, 1);
    date = new Date(utcDate);

    expect(ScoreGenerator.forDate(date)).to.equal('2000110200000001');
  });
});
