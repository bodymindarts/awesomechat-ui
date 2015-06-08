'use strict';

module.exports = {
  'init': function(appState) {
    var logoutAction = appState.reference(['actions', 'logout']);
    logoutAction.observe('change', function(newVal, oldVal, path) {
      if(newVal.get('actions').get('logout')) {
        logoutAction.cursor().update(function() {
          return false;
        });
        appState.cursor('currentUser').update(function () {
          return '';
        });
        appState.cursor('loggedIn').update(function() {
          return false;
        });
      }
    });
  }
};
