'use strict';

var MessageFactory = require('../MessageFactory');

module.exports = {
  submitMessage: function(userName, inputCursor, pendingMessageCursor){
    var text = inputCursor.deref();
    if(text === '') {
      return;
    }

    var pendingMessage = MessageFactory.pending(userName, text);
    pendingMessageCursor.update(function(messages) {
      return messages.concat(pendingMessage);
    });
    inputCursor.update(function(){
      return '';
    });
  }
};
