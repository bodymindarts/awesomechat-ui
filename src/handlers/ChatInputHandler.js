'use strict';

var MessageFactory = require('../MessageFactory');

module.exports = {
  'init': function(appState) {
    var sendAction = appState.reference(['actions', 'send']);
    sendAction.observe('change', function(newVal, oldVal, path) {
      if(newVal.get('actions').get('send')) {
        var messageCursor = appState.cursor(['inputs', 'message']);
        var message = messageCursor.deref();

        sendAction.cursor().update(function() {
          return false;
        });

        if(message === '') {
          return;
        }

        messageCursor.update(function () {
          return '';
        });

        var userName = appState.cursor('currentUser').deref();
        var pendingMessage = MessageFactory.pending(userName, message);
        var pendingMessageCursor = appState.cursor(['history', 'pending']);
        pendingMessageCursor.update(function(messages) {
          return messages.concat(pendingMessage);
        });
      }
    });
  }
};
