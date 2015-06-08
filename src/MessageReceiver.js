'use strict';

var MessageHistory = require('./MessageHistory');

module.exports = {
  'init': function(state, socket) {
    socket.onmessage = function(raw) {
      console.log('MESSAGE RECEIVED ', event);
      var message = JSON.parse(event.data);

      if(message.text !== 'undefined') {
        var confirmed = state.cursor(['history', 'confirmed']);
        var pending = state.cursor(['history', 'pending']);

        confirmed.update(function(current) {
          return MessageHistory.add(current, message);
        });

        pending.update(function(current) {
          console.log('updating pending to: '.
                      concat(MessageHistory.remove(current, message)));
          return MessageHistory.remove(current, message);
        });
      }
    };
  }
};
