'use strict';

var Immutable = require('immutable');
var MessageHistory = require('./MessageHistory');

module.exports = {
  'init': function(state, socket) {
    socket.onmessage = function(event) {
      console.log('MESSAGE RECEIVED ', event);
      var message = JSON.parse(event.data);
      console.log('message: ', message);

        var confirmed = state.cursor(['history', 'confirmed']);
        var pending = state.cursor(['history', 'pending']);

        console.log(typeof message);
        console.log(message.id);
      if(typeof message.id !== 'undefined') {
        confirmed.update((current) => MessageHistory.add(current, message));
        pending.update((current) => MessageHistory.remove(current, message));
      } else {
        confirmed.update(() => new Immutable.List(message));
      }
    };
  }
};
