'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8091
});

server.route({
    method: 'GET',
    path: '/api/programs',
    handler: function(request, reply) {
        return reply('hello world');
    }
});

server.start(function(err) {
    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
