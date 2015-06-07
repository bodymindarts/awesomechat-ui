'use strict';

var MessageFactory = require('../MessageFactory');

module.exports = {
  submitMessage: function(userName, text, pendingMessageCursor){
    pendingMessageCursor.update(function(messages) {
      var pendingMessage = MessageFactory.pending(userName, text);
      return messages.concat(pendingMessage);
    });
  }
};
