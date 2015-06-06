'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className='message'>
        <h2 className='message-author'>
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});
