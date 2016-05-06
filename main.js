'use strict';

var css = require('./style/main.less');
var React = require('react');
var ReactDOM = require('react-dom');

var ManagePrograms = require('./components/ManagePrograms.jsx');

ReactDOM.render(React.createElement(ManagePrograms), document.getElementById('app'));
