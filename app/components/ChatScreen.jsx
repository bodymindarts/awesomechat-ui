'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');
// var MessageHistory = require('../MessageHistory');
var ChatMessage = require('./ChatMessage');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  renderMessages: function() {
    var messages = this.props.pendingMessages.deref();
    // MessageHistory.merge(
    //   this.props.confirmedHistory.deref(),
    //   this.props.pendingMessages.deref()
    // );

    return messages.map(function (message) {
      return (
        <ChatMessage message={message} />
      );
    });
  },
  render: function() {
    return (
      <div className='chat-screen'>
        { this.renderMessages() }
      </div>
    );
  }
});
