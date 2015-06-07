'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');
var ChatScreen = require('./ChatScreen');
var ChatLogin = require('./ChatLogin');
var ChatInput = require('./ChatInput');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  render: function(){
    var userNameCursor = this.props.appState.cursor('userName');
    var loggedInCursor = this.props.appState.cursor('loggedIn');
    var pendingMessagesCursor = this.props.appState.cursor('pendingMessages');
    var messageInputCursor = this.props.appState.cursor('messageInput');

    return (
      <div className='chat-app'>
        <h1>Welcome to AwsomeChat</h1>
        <ChatLogin
          userName={userNameCursor}
          loggedIn={loggedInCursor} />
        <ChatScreen pendingMessages={pendingMessagesCursor} />
        <ChatInput
          pendingMessages={pendingMessagesCursor}
          messageInput={messageInputCursor}
          userName={userNameCursor}
          loggedIn={loggedInCursor}/>
      </div>
    );
  }
});
