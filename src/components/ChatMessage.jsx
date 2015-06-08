'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  render: function() {
    var message = this.props.message;
    var messageClasses = 'message';
    if(message.pending) {
      messageClasses += ' message-pending';
    }
    console.log(message.user + ' ' + this.props.userName);
    if(message.user === this.props.userName){
      messageClasses += ' message-self'
    }
    return (
      <li className={messageClasses}>
        <span className='message-user' >
          {message.user}
        </span>
        <span className='message-text' >
          {message.text}
        </span>
      </li>
    );
  }
});
