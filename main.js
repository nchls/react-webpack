'use strict';

var css = require('./style/main.less');
var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/Board.jsx');

ReactDOM.render(React.createElement(Board), document.getElementById('app'));
