'use strict'

var React = require('react');
var ChatBox = require('./components/ChatBox');

var state = {
  messages: [
    { author: "Justin", text: "j's message" },
    { author: "ray", text: "r's message" }
  ]
};

React.render(<ChatBox/>, document.getElementById('app'));

