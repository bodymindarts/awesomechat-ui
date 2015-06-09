'use strict';

var Immutable = require('immutable');
var MessageHistory = require('./MessageHistory');

module.exports = {
  'init': function(state, socket) {
    socket.onmessage = function(event) {

      var message = JSON.parse(event.data);

      var confirmed = state.cursor(['history', 'confirmed']);
      var pending = state.cursor(['history', 'pending']);

      if(typeof message.id !== 'undefined') {
        confirmed.update((confirmed) => MessageHistory.add(confirmed, message));
        pending.update((pending) => MessageHistory.remove(pending, message));
      } else {
        confirmed.update(() => new Immutable.List(message));
      }
    };
  }
};
