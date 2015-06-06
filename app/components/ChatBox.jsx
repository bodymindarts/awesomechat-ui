'use strict';

var React = require('react');
var ChatScreen = require('./ChatScreen');
var Login = require('./Login');
var ChatInput = require('./ChatInput');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      messages: [
        { author: "Justin", text: "j's message" },
        { author: "ray", text: "r's message" }
      ]
    };
  },

  render: function(){
    return (
      <div className='chat-box'>
        <h1>Welcome to AwsomeChat</h1>
        <Login />
        <ChatScreen messages={this.state.messages}/>
        <ChatInput />
      </div>
    );
  }
});
