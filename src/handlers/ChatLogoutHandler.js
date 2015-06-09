'use strict';

module.exports = {
  'init': function(appState) {
    var logoutAction = appState.reference(['actions', 'logout']);
    logoutAction.observe('change', function() {
      console.log('logout');
      if(logoutAction.cursor().deref()) {
      console.log('logout');
        logoutAction.cursor().update(() => false );
        appState.cursor('currentUser').update(() => '');
        appState.cursor('loggedIn').update(() => false);
      }
    });
  }
};
