'use strict';

module.exports = {
  'init': function(appState) {
    var loginAction = appState.reference(['actions', 'login']);
    loginAction.observe('change', function(newVal, oldVal, path) {
      if(newVal.get('actions').get('login')) {
        var nameCursor = appState.cursor(['inputs', 'name']);
        var name = nameCursor.deref();

        // some ajax call -> on success
        loginAction.cursor().update(function() {
          return false;
        });
        nameCursor.update(function () {
          return '';
        });
        appState.cursor('currentUser').update(function () {
          return name;
        });
        appState.cursor('loggedIn').update(function() {
          return true;
        });
      }
    });
  }
};
