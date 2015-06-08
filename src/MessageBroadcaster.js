'use strict';

module.exports = {
  'init': function(appState, socket) {
    var pendingMessages = appState.reference(['history', 'pending']);

    socket.onopen = function() {
      pendingMessages.cursor().deref().forEach(function(message) {
        console.log('SENDING open: '.concat(JSON.stringify(message)));
        socket.send(JSON.stringify(message));
      });
    };

    pendingMessages.observe('change', function(newVal, oldVal, path) {
      if(socket.readyState === WebSocket.OPEN) {
        pendingMessages.cursor().deref().forEach(function(message) {
          console.log('SENDING ready: '.concat(JSON.stringify(message)));
          socket.send(JSON.stringify(message));
        });
      }
    });
  }
};
