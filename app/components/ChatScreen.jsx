'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');
// var MessageHistory = require('../MessageHistory');
var ChatMessage = require('./ChatMessage');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  componentWillUpdate: function() {
    var node = this.getDOMNode();
    var scrollDif = node.scrollTop + node.offsetHeight;
    this.shouldScrollBottom = scrollDif === node.scrollHeight;
  },
  componentDidUpdate: function() {
    if (this.shouldScrollBottom) {
      var node = this.getDOMNode();
      node.scrollTop = node.scrollHeight
    }
  },
  renderMessages: function() {
    var userName = this.props.userName.deref();
    var messages = this.props.pendingMessages.deref();
    // MessageHistory.merge(
    //   this.props.confirmedHistory.deref(),
    //   this.props.pendingMessages.deref()
    // );

    return messages.map(function (message) {
      return (
        <ChatMessage message={message} userName={userName}/>
      );
    });
  },
  render: function() {
    return (
      <ul className='chat-screen'>
        { this.renderMessages() }
      </ul>
    );
  }
});
