'use strict';

var Immutable = require('immutable');
var AppState = require('./AppState');

var historyChanged = function(state, storage) {
  console.log('updating history');

  var serializeableHistory = {
    pending: state.cursor(['history', 'pending']).deref().toArray(),
    confirmed: state.cursor(['history', 'confirmed']).deref().toArray()
  };

  storage.writeHistory(serializeableHistory);
  console.log('done');
};

var initialize = function(state, storage) {
  var user = storage.readLoggedInUser();
  var history = storage.readHistory();

  if(history !== null) {
    state.cursor(['history', 'pending']).
      update(() => new Immutable.List(history.pending));
    state.cursor(['history', 'confirmed']).
      update(() => new Immutable.List(history.confirmed));
  }

  if(user !== null) {
    state.cursor('currentUser').update(() => user);
    state.cursor('loggedIn').update(() => true);
  }
};

module.exports = {
  'init': function(state, storage) {
    initialize(state, storage);

    var currentUser = state.reference('currentUser');
    currentUser.observe('change', () => {
      var name = currentUser.cursor().deref();
      if(name !== '') {
        storage.writeLoggedInUser(name)
      } else {
        storage.removeLoggedInUser();
      }
    });

    var history = state.reference('history');
    history.observe('change', () => historyChanged(state, storage));
  }
};
