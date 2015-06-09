'use strict';

require('./assets/stylesheets/styles.scss')
var state = require('./AppState');

var storage = require('./Storage');
var StateSyncer = require('./StateSyncer');
console.log('state:\n', JSON.stringify(state.cursor().deref()));
StateSyncer.init(state, storage);

console.log('state:\n', JSON.stringify(state.cursor().deref()));

var ChatLoginHandler = require('./handlers/ChatLoginHandler');
ChatLoginHandler.init(state);

var ChatLogoutHandler = require('./handlers/ChatLogoutHandler');
ChatLogoutHandler.init(state);

var ChatInputHandler = require('./handlers/ChatInputHandler');
ChatInputHandler.init(state);

var ReconnectingWebSocket = require('ReconnectingWebSocket');
var socket = new ReconnectingWebSocket(
  'ws://localhost:10000',
  null,
  { reconnectInterval: 500, reconnectDecay: 1.1 }
);

var MessageReceiver = require('./MessageReceiver');
MessageReceiver.init(state, socket);

var MessageBroadcaster = require('./MessageBroadcaster');
MessageBroadcaster.init(state, socket);

var React = require('react');
var ChatApp = require('./components/ChatApp');

var render = function() {
  React.render(<ChatApp appState={state.cursor()}/>,
               document.getElementById('content'));
};

console.log('state:\n', JSON.stringify(state.cursor().deref()));
state.on('swap', function() {
  render();
});

render();
