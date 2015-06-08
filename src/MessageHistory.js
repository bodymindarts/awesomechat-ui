'use strict';

var Immutable = require('immutable');

var compare = function(m1, m2) {
  return m1.id.localeCompare(m2.id);
};

var indexOfMessage = function(history, message) {
  for(var index = 0; index < history.size; index++) {
    if(history.get(index).id === message.id) {
      return index;
    }
  };
  return -1;
};

var indexOfLastMessageBefore = function(history, message) {
  for(var index = history.size - 1; index >= 0; index--) {
    if(compare(message, history.get(index)) < 0) {
      return index - 1;
    }
  }
  return -1;
};

module.exports = {
  'merge': function(confirmed, pending) {
    var iConf = 0, iPen = 0;
    var newHistory = [];
    do {
      if(iConf === confirmed.size) {
        pending.slice(iPen).forEach(m => newHistory.push(m));
        return new Immutable.List(newHistory);
      }
      if(iPen === pending.size) {
        confirmed.slice(iConf).forEach(m => newHistory.push(m));
        return new Immutable.List(newHistory);;
      }

      var compareVal = compare(confirmed.get(iConf), pending.get(iPen));
      if(compareVal === 0){
        iPen++;
      } else if(compareVal < 0 ) {
        newHistory.push(confirmed.get(iConf));
        iConf++;
      } else {
        newHistory.push(pending.get(iPen));
        iPen++;
      }
    } while(true);
  },

  'add': function(history, message) {
    if(indexOfMessage(history, message) >= 0) {
      return history;
    }
    var index = indexOfLastMessageBefore(history, message);
    if(index < 0){
      return history.unshift(message);
    }
    return history.splice(index + 1, 0, message);
  },

  'remove': function(history, message) {
    var index = indexOfMessage(history, message);
    if(index >= 0) {
      return history.slice(0, index).
        concat(history.slice(index + 1));
    }
    return history;
  }
};
