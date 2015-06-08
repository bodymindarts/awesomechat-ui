'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');

module.exports = React.createClass({
  handleLogout: function(e) {
    this.props.action.update(function() {
      return true;
    });
  },
  render: function() {
    return (
      <button onClick={this.handleLogout} >Log Out</button>
    );
  }
});
