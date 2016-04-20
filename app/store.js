var redux = require('redux');
var reducers = require('./reducers.js');

var store = redux.createStore(reducers);

module.exports = store;
