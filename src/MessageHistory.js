'use strict';

var compare = function(m1, m2) {
  return m1.id.localeCompare(m2.id);
};

var indexOfMessage = function(history, message) {
  for(var index = 0; index < history.length; index++) {
    if(history[index].id === message.id) {
      return index;
    }
  };
};

var indexOfLastMessageBefore = function(history, message) {
  for(var index = history.length - 1; index >= 0; index--) {
    if(compare(message, history[index]) < 0) {
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
      if(iConf === confirmed.length) {
        return newHistory.concat(pending.slice(iPen));
      }
      if(iPen === pending.length) {
        return newHistory.concat(confirmed.slice(iConf));
      }

      if(compare(confirmed[iConf], pending[iPen]) < 0 ) {
        newHistory.push(confirmed[iConf]);
        iConf++;
      } else {
        newHistory.push(pending[iPen]);
        iPen++;
      }
    } while(true);
    return confirmed.concat(pending);
  },

  'add': function(history, message) {
    var index = indexOfLastMessageBefore(history, message);
    if(index < 0){
      return [ message ].concat(history);
    }
    var newHistory = history.slice();
    newHistory.splice(index + 1, 0, message);
    return newHistory;
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
