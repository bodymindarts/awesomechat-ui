var immstruct = require('immstruct');

module.exports = immstruct({
  connected: false,
  currentRoom: 'default',
  loggedIn: false,
  userName: '',
  confirmedHistory: [],
  pendingMessages: [],
  messageInput: ''
});
