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
      <form className="login-form" onSubmit={this.handleLogin} noValidate >
        <input placeholder='your name'
          value={this.props.userName.deref()}
          onChange={this.inputChanged}
        />
        <button type='submit'>Log In</button>
      </form>
    );
  },
  renderLogout: function() {
    return (
      <form className='logout-form' onSubmit={this.handleLogout}>
        <span>{this.props.userName.deref()}</span>
        <button type='submit'>Log Out</button>
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
