'use strict';

var Immutable = require('immutable');
var MessageHistory = require('../../src/domain/MessageHistory');

describe('MessageHistory', function() {

  var m0 = { id: '10-id' };
  var m1 = { id: '11-id' };
  var m2 = { id: '12-id' };
  var m3 = { id: '13-id' };
  var messagesOne = Immutable.List.of(m0, m2);
  var messagesOther = Immutable.List.of(m1, m3);

  describe('remove', function() {

    it('can remove a Message from a List', function() {

      var newMessages = MessageHistory.remove(messagesOne, m0);
      expect(newMessages.size).to.equal(1);
      expect(newMessages.get(0)).to.equal(m2);
    });
  });

  describe('add', function() {

    it('adds a Message respecting the time line', function() {

      var newMessages = MessageHistory.add(messagesOne.push(m3), m1);
      expect(newMessages.size).to.equal(4);
      expect(newMessages.get(1)).to.equal(m1);
    });

    it('does not add a Message already present', function() {

      var newMessages = MessageHistory.add(messagesOne, m0);
      expect(newMessages.size).to.equal(2);
    });
  });

  describe('merge', function() {

    it('merges two histories respecting time', function() {

      var newMessages = MessageHistory.merge(messagesOne, messagesOther);
      expect(newMessages.size).to.equal(4);
      expect(newMessages.get(0)).to.equal(m0);
      expect(newMessages.get(1)).to.equal(m1);
      expect(newMessages.get(2)).to.equal(m2);
      expect(newMessages.get(3)).to.equal(m3);
    });
  });
});
