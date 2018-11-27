'use strict';

var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var afterEach = lab.afterEach;
var server = require('../../');
var db = server.database;

describe('Routes /productsstores', function() {

    describe('GET /productsstores', function() {

        it('returns 200 HTTP status code', function(done) {
            var options = {method: 'GET', url: '/productsstores'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(200);
                done();
            });
        });

    });

    describe('GET /productsstores/{id}', function() {

        it('validates id in url parameter', function(done) {
            var options = {method: 'GET', url: '/productsstores/1'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

    });

    describe('POST /productsstores', function() {



    });

    describe('PUT /productsstores/{id}', function() {

        

    });

    describe('DELETE /productsstores/{id}', function() {

        

    });

});
