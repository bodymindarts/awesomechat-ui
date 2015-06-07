'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  render: function() {
    var message = this.props.message;
    var messageClasses = 'message';
    if(message.pending) {
      messageClasses += ' pending';
    }
    return (
      <div className={messageClasses}>
        <div className='message-info'>
          <span className='message-author' >
            {message.user}
          </span>
          <span className='message-date' >
            {message.timeStamp}
          </span>
        </div>
        <span className='message-text' >
          {message.text}
        </span>
      </div>
    );
  }
});
