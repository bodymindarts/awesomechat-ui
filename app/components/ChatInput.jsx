'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');
var ChatInputHandler = require('../handlers/ChatInputHandler');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  inputChanged: function(e) {
    this.props.messageInput.update(function() {
      return e.target.value;
    });
  },
  submitMessage: function(e) {
    e.preventDefault();
    console.log('sendMessage');
    var userName = this.props.userName.deref();
    var text = this.props.messageInput.deref();
    var pendingMessages = this.props.pendingMessages;
    ChatInputHandler.submitMessage(userName, text, pendingMessages);
  },
  render: function() {
    return (
      <form className="chat-input" onSubmit={this.submitMessage} noValidate >
        <input placeholder='message' onChange={this.inputChanged} />
        <button type='submit' disabled={!this.props.loggedIn.deref()} >
          Send
        </button>
      </form>
    );
  }
});
