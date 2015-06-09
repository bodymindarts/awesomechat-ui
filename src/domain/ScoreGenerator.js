'use strict';

var addZero = function(number) {

  if(number < 10){
    return '0' + number;
  } else {
    return number.toString();
  }
};


module.exports = {
  'forDate': function(date) {

    var totalMilliseconds = date.getUTCHours() * 3600 * 1000 +
      date.getUTCMinutes() * 60 * 1000 +
      date.getUTCSeconds() * 1000 +
      date.getUTCMilliseconds();

    return ''.concat(
      date.getUTCFullYear(),
      addZero(date.getUTCMonth()),
      addZero(date.getUTCDate()),
      totalMilliseconds
    );
  }
};

