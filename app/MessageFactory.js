'use strict';

var pending = function(userName, text) {
  var now = new Date();
  var timeStamp = now.toISOString();
  var score = now.getUTCMilliseconds();
  var id = score.toString() + userName;
  return {
    id: id,
    score: score,
    user: userName,
    text: text,
    pending: true,
    timeStamp: timeStamp
  };
};

module.exports = {
  'pending': pending
};
