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
    var input = this.props.messageInput;
    var pendingMessages = this.props.pendingMessages;
    ChatInputHandler.submitMessage(userName, input, pendingMessages);
  },
  render: function() {
    return (
      <form className="chat-input" onSubmit={this.submitMessage} noValidate >
        <button type='submit' disabled={!this.props.loggedIn.deref()} >
          Send
        </button>
        <input placeholder='message'
          onChange={this.inputChanged}
          value={this.props.messageInput.deref()} />
      </form>
    );
  }
});
