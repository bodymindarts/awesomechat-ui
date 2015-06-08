'use strict';

module.exports = {
  handleLogin: function(nameCursor, loggedInCursor) {
    var name = nameCursor.deref();
    if(name === '') {
      return;
    }
    // some ajax call -> promis -> then()
    loggedInCursor.update(function() {
      return true;
    });
  },

  handleLogout: function(nameCursor, loggedInCursor) {
    // some ajax call -> promis -> then()
    loggedInCursor.update(function() {
      return false;
    });
    nameCursor.update(function() {
      return '';
    });
  }
};
