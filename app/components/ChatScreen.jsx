'use strict';

var React = require('react');
var Message = require('./Message');

module.exports = React.createClass({
  render: function() {
    var messages = this.props.messages.map(function (message) {
      return <Message author={message.author}>{message.text}</Message>
    });
    return (
      <div className='chat-screen'>
        { messages }
      </div>
    );
  }
});
