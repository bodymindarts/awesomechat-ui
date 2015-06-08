'use strict';

var ImmutableOptimization = require('../mixins/ImmutableOptimization');
var React = require('react');
var ChatInputHandler = require('../handlers/ChatInputHandler');

module.exports = React.createClass({
  mixins: [ImmutableOptimization],

  inputChanged: function(e) {
    this.props.input.update(function() {
      return e.target.value;
    });
  },
  submitMessage: function(e) {
    e.preventDefault();
    this.props.action.update(function() {
      console.log('submit');
      return true;
    });
  },
  render: function() {
    return (
      <form className="chat-input" onSubmit={this.submitMessage} noValidate >
        <button type='submit' disabled={this.props.disabled} >
          Send
        </button>
        <input placeholder='message'
          onChange={this.inputChanged}
          value={this.props.input.deref()} />
      </form>
    );
  }
});
