'use strict';

var ScoreGenerator = require('../src/ScoreGenerator');

describe('ScoreGenerator', function() {

  it('generates a score given a date', function() {

    var year = 2000;
    var month = 11;
    var day = 2;
    var secondsTotal = 33333;

    var hours = Math.floor(secondsTotal / 3600);
    var minutes = Math.floor((secondsTotal - hours * 3600) / 60);
    var seconds = (secondsTotal - hours * 3600 - minutes * 60 );

    var date = new Date(Date.UTC(year, month, day, hours, minutes, seconds));

    expect(ScoreGenerator.forDate(date)).to.equal('2000110233333');
  });
});
