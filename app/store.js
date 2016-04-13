var EventEmitter = require('wolfy87-eventemitter');
var _ = require('lodash');

var emitter = new EventEmitter();

module.exports = {
    emitter: emitter,

    state: {},

    set: function(updates) {
        var self = this;
        var updatedKeys = [];
        _.forEach(updates, function(val, key) {
            if (self.state[key] !== val) {
                self.state[key] = val;
                updatedKeys.push(key);
            }
        });
        if (updatedKeys.length) {
            emitter.emitEvent('update', [updatedKeys]);
        }
    },
    push: function(key, pushVal) {
        this.state[key].push(pushVal);
        emitter.emitEvent('update', [[key]]);
    },

    propListeners: {},
    addPropListener: function(prop, callback) {
        var handler = function(keys) {
            if (keys.indexOf(prop) !== -1) {
                callback();
            }
        };
        this.propListeners[callback] = handler;
        emitter.addListener('update', handler);
    },
    removePropListeners: function(listeners) {
        var self = this;
        _.forEach(propListeners, function(listener) {
            var handler = self.propListeners[listener.callback];
            emitter.removeListener('update', handler);
        });
    }
};
