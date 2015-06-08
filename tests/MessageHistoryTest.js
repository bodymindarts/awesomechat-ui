'use strict';

var MessageHistory = require('../src/MessageHistory');

describe('MessageHistory', function() {
  var m0 = { id: '10-id' };
  var m1 = { id: '11-id' }
  var m2 = { id: '12-id' }
  var m3 = { id: '13-id' };
  var messagesOrig = [ m0, m2 ];
  var messagesOther = [ m1, m3 ];

  describe('remove', function() {
    it('can remove a Message from an array', function() {
      var newMessages = MessageHistory.remove(messagesOrig, m0);
      expect(newMessages.length).to.equal(1);
      expect(newMessages[0]).to.equal(m2);
    });
  });

  describe('add', function() {
    it('adds a Message respecting the time line', function() {
      var newMessages = MessageHistory.add(messagesOrig, m1);
      expect(newMessages.length).to.equal(3);
      expect(newMessages[1]).to.equal(m1);
    });
  });

  describe('merge', function() {
    it('merges two histories respecting time', function() {
      var newMessages = MessageHistory.merge(messagesOrig, messagesOther);
      expect(newMessages.length).to.equal(4);
      expect(newMessages[0]).to.equal(m0);
      expect(newMessages[1]).to.equal(m1);
      expect(newMessages[2]).to.equal(m2);
      expect(newMessages[3]).to.equal(m3);
    });
  });
});
