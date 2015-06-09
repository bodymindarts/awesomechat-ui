'use strict';

var MessageHistory = require('../MessageHistory');
var MessageFactory = require('../MessageFactory');

module.exports = {
  'init': function(appState) {
    var sendAction = appState.reference(['actions', 'send']);
    sendAction.observe('change', function() {
          console.log('send action');
      if(sendAction.cursor().deref()) {
        var messageCursor = appState.cursor(['inputs', 'message']);
        var message = messageCursor.deref();

        sendAction.cursor().update(() => false);

        if(message === '') {
          return;
        }

        messageCursor.update(() => '');

        var userName = appState.cursor('currentUser').deref();
        var pendingMessage = MessageFactory.pending(userName, message);
        var pendingMessageCursor = appState.cursor(['history', 'pending']);
        pendingMessageCursor.update(function(history) {
          console.log('upating pending');
          return MessageHistory.add(history, pendingMessage);
        });
      }
    });
  }
};
