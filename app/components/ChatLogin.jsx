'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');
var ChatLoginHandler = require('../handlers/ChatLoginHandler');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  inputChanged: function(e) {
    this.props.userName.update(function() {
      return e.target.value;
    });
  },
  handleLogin: function(e) {
    e.preventDefault();
    ChatLoginHandler.handleLogin(
      this.props.userName,
      this.props.loggedIn
    );
  },
  handleLogout: function(e) {
    e.preventDefault();
    ChatLoginHandler.handleLogout(
      this.props.userName,
      this.props.loggedIn
    );
  },
  renderLogin: function() {
    return (
      <form className='chat-login' onSubmit={this.handleLogin} noValidate >
        <button type='submit'>Log In</button>
        <input placeholder='your name'
          value={this.props.userName.deref()}
          onChange={this.inputChanged}
        />
      </form>
    );
  },
  renderLogout: function() {
    return (
      <form className='chat-logout' onSubmit={this.handleLogout}>
        <button type='submit'>Log Out</button>
        <span>Welcome {this.props.userName.deref()}!</span>
      </form>
    );
  },
  render: function() {
    var loggedIn = this.props.loggedIn.deref();
    if(loggedIn) {
      return this.renderLogout();
    } else {
      return this.renderLogin();
    }
  }
});
