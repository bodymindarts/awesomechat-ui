'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  inputChanged: function(e) {
    this.props.input.update(function() {
      return e.target.value;
    });
  },
  handleLogin: function(e) {
    e.preventDefault();
    this.props.action.update(function() {
      return true;
    });
  },
  render: function() {
    return (
      <form className='chat-login' onSubmit={this.handleLogin} noValidate >
        <button type='submit'>Log In</button>
        <input placeholder='your name'
          value={this.props.input.deref()}
          onChange={this.inputChanged}
        />
      </form>
    );
  }
});
