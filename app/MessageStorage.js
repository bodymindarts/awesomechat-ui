'use strict';

var writeLoggedInUser = function(user){
  localStorage.setItem('currentUser', user);
};

var readLoggedInUser = function (){
  return localStorage.getItem('currentUser');
};

var getHistoryKey = function(){
  return readLoggedInUser() + 'History';
};

var writePendingHistory = function(history) {
  localStorage.setItem(getHistoryKey(), JSON.stringify(history));
};

var readPendingHistory = function() {
  return JSON.parse(localStorage.getItem(getHistoryKey()));
};

module.exports = {
  'writeLoggedInUser': writeLoggedInUser,
  'readLoggedInUser': readLoggedInUser,
  'writePendingHistory': writePendingHistory,
  'readPendingHistory': readPendingHistory
};
