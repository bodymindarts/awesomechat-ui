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

    var totalSeconds = date.getUTCHours() * 3600 +
      date.getUTCMinutes() * 60 +
      date.getUTCSeconds();

    return ''.concat(
      date.getUTCFullYear(),
      addZero(date.getUTCMonth()),
      addZero(date.getUTCDate()),
      totalSeconds
    );
  }
};

