var store = require('../app/store.js');

module.exports = {
    mixins: [{
        componentWillMount: function() {
            this.propListeners = [];
        },
        componentWillUnmount: function() {
            store.removePropListeners(this.propListeners);
        }
    }],

    addPropListener: function(prop, callback) {
        store.addPropListener(prop, callback);
        this.propListeners.push({
            event: event,
            callback: callback
        });
    }
};