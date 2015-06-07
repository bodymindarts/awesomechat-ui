'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');
var ChatScreen = require('./ChatScreen');
var ChatLogin = require('./ChatLogin');
var ChatInput = require('./ChatInput');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  userNameCursor: function() {
    return this.props.appState.cursor('userName');
  },
  loggedInCursor: function() {
    return this.props.appState.cursor('loggedIn');
  },
  pendingMessagesCursor: function() {
    return this.props.appState.cursor('pendingMessages');
  },
  messageInputCursor: function() {
    return this.props.appState.cursor('messageInput');
  },
  render: function(){
    return (
      <div className='chat-app'>
        <h1>Welcome to AwsomeChat</h1>
        <ChatLogin
          userName={this.userNameCursor()}
          loggedIn={this.loggedInCursor()} />
        <ChatScreen pendingMessages={this.pendingMessagesCursor()} />
        <ChatInput
          pendingMessages={this.pendingMessagesCursor()}
          messageInput={this.messageInputCursor()}
          userName={this.userNameCursor().deref()}
          disabled={!this.loggedInCursor().deref()}/>
      </div>
    );
  }
});
