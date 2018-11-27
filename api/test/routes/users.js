'use strict';

var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var afterEach = lab.afterEach;
var server = require('../../');
var db = server.database;

describe('Routes /users', function() {

    describe('GET /users', function() {

        it('returns 200 HTTP status code', function(done) {
            var options = {method: 'GET', url: '/users'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(200);
                done();
            });
        });

    });

    describe('GET /users/{id}', function() {

        it('validates id in url parameter', function(done) {
            var options = {method: 'GET', url: '/users/1'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

    });

    describe('POST /users', function() {

        it('fails when there\'s no payload', function(done) {
            var options = {method: 'POST', url: '/users'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

        it('fails with an invalid payload', function(done) {
            var options = {method: 'POST', url: '/users', payload: {}};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

        it('fails when there\'s too many properties in the payload', function(done) {
            var options = {method: 'POST', url: '/users', payload: {username: 'a user', something: 'else'}};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

    });

    describe('PUT /users/{id}', function() {

        

    });

    describe('DELETE /users/{id}', function() {

        

    });

});
