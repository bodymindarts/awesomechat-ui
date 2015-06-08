var immstruct = require('immstruct');

module.exports = immstruct({
  loggedIn: false,
  currentUser: '',
  history: {
    confirmed: [],
    pending: []
  },
  actions: {
    login: false,
    logout: false,
    send: false
  },
  inputs: {
    message: '',
    name: ''
  }
});
