'use strict';

module.exports = {
    get: function(resource) {
        return new Promise(function(resolve, reject) {
            resolve({
                columns: [
                    {id: '6f13c6ba-5845-4596-a8e3-897eb6a0a038', name: 'foo'},
                    {id: 'c9dedde7-bb97-4f1b-99e3-85e576dbb056', name: 'bar'}
                ],
                cards: [
                    {id: '59a0e6dc-2d52-48ed-bf60-f0fd7ccd6370', name: 'spam', columnId: '6f13c6ba-5845-4596-a8e3-897eb6a0a038'},
                    {id: '01c435a6-da67-4ba2-aa5c-efc81f33daa3', name: 'eggs', columnId: 'c9dedde7-bb97-4f1b-99e3-85e576dbb056'}
                ]
            });
        });
    },
    set: function(resource, data) {
        return new Promise(function(resolve, reject) {

        });
    }
};
