'use strict';

module.exports = {
  'init': function(appState) {
    var loginAction = appState.reference(['actions', 'login']);
    loginAction.observe('change', function() {
        console.log('login');
      if(loginAction.cursor().deref()) {
        loginAction.cursor().update(() => false );

        var nameCursor = appState.cursor(['inputs', 'name']);
        var name = nameCursor.deref();

        if(name === '') {
          return;
        }

        console.log('login ' + name);
        // some ajax call -> on success
        nameCursor.update(() => '');

        appState.cursor('currentUser').update(() => name);
        appState.cursor('loggedIn').update(() => true);
      }
    });
  }
};
