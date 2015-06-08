'use strict';

require('./assets/stylesheets/styles.scss')

var state = require('./AppState');

// var storage = require('./MessageStorage');
// var StorageSyncer = require('./StorageSyncer');
// StorageSyncer.init(state, storage);

var ChatLoginHandler = require('./handlers/ChatLoginHandler');
ChatLoginHandler.init(state);

var ChatLogoutHandler = require('./handlers/ChatLogoutHandler');
ChatLogoutHandler.init(state);

var ChatInputHandler = require('./handlers/ChatInputHandler');
ChatInputHandler.init(state);

// var socket = new WebSocket('ws://localhost:10000/room');
// var MessageReceiver = require('./MessageReceiver');
// MessageReceiver.init(stateCursor, socket);
//
// var MessageBroadcaster = require('./MessageBroadcaster');
// MessageBroadcaster.init(stateCursor, socket);

var React = require('react');
var ChatApp = require('./components/ChatApp');

var render = function() {
  React.render(<ChatApp appState={state.cursor()}/>,
               document.getElementById('content'));
};

state.on('swap', function() {
  render();
});

render();



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
