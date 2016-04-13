'use strict';

module.exports = {
    get: function(resource) {
        return new Promise(function(resolve, reject) {
            resolve({
                columns: [
                    {name: 'foo'},
                    {name: 'bar'}
                ],
                cards: [
                    {id: 0, label: 'spam', column: 0},
                    {id: 1, label: 'eggs', column: 1}
                ]
            });
        });
    },
    set: function(resource, data) {
        return new Promise(function(resolve, reject) {

        });
    }
};
