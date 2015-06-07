'use strict';

var MessageFactory = require('../MessageFactory');

module.exports = {
  submitMessage: function(userName, text, pendingMessageCursor){
    var pendingMessage = MessageFactory.pending(userName, text);
    pendingMessageCursor.update(function(messages) {
      return messages.concat(pendingMessage);
    });
  }
};
