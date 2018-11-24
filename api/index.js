'use strict';

var Database = require('./database');
var Hapi = require('hapi');

var database = new Database();
var server = new Hapi.Server({debug: {request: ['info', 'error']}});

// Expose database
if (process.env.NODE_ENV === 'test') {
    server.database = database;
}

// Create server
server.connection({
    host: process.env.SERVER_HOST,
    port: 8000
});

// DotEnv
var Path = require('path');
var DotEnv = require('dotenv');
DotEnv.config({ path: Path.join(__dirname, '/.env'), silent: true });

// Add plugins, including routes
var plugins = [
    {
        register: require('./routes/users.js'),
        options: {
            database: database
        }
    },
    {
        register: require('./routes/products.js'),
        options: {
            database: database
        }
    },
    {
        register: require('./routes/stores.js'),
        options: {
            database: database
        }
    },
    {
        register: require('./routes/findnearproducts.js')
    },
    {
        register: require('hapi-cors')
    }
];

server.register(plugins, function (err) {
    if (err) { throw err; }

    if (!module.parent) {
        server.start(function(err) {
            if (err) { throw err; }

            server.log('info', 'Server running at: ' + server.info.uri);
        });
    }
});

module.exports = server;
