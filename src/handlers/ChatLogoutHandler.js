'use strict';

var Immutable = require('immutable');

module.exports = {
  'init': function(appState) {
    var logoutAction = appState.reference(['actions', 'logout']);
    logoutAction.observe('change', function(newVal, oldVal, path) {

      console.log('logout');
      if(logoutAction.cursor().deref()) {
      console.log('logout');
        logoutAction.cursor().update(() => false );
        appState.cursor('currentUser').update(()  => '');
        appState.cursor('loggedIn').update(() => false);
      }
    });
  }
};
