'use strict';

var React = require('react');
var ChatApp = require('./components/ChatApp');
var state = require('./AppState');

// StateHandler.restoreState(require('./AppState'))
// var Storage = require('./MessageStorage');

var render = function() {
  React.render(<ChatApp appState={state.cursor()}/>,
               document.getElementById('app'));
};

state.on('swap', function() {
  render();
});

render();


// var socket = new WebSocket('ws://localhost:10000/room');

// socket.onopen = function(event) {

//   // Send an initial message
//   socket.send('I am the client and I\'m listening!');

//   // Listen for messages
//   socket.onmessage = function(event) {
//     console.log('Client received a message',event);
//   };

//   // Listen for socket closes
//   socket.onclose = function(event) {
//     console.log('Client notified socket has closed',event);
//   };

//   // socket.close()
// };
