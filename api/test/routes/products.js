'use strict';

var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var afterEach = lab.afterEach;
var server = require('../../');
var db = server.database;

describe('Routes /products', function() {

    describe('GET /products', function() {

        it('returns 200 HTTP status code', function(done) {
            var options = {method: 'GET', url: '/products'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(200);
                done();
            });
        });

    });

    describe('GET /products/{id}', function() {

        it('validates id in url parameter', function(done) {
            var options = {method: 'GET', url: '/products/1'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

    });

    describe('POST /products', function() {



    });

    describe('PUT /products/{id}', function() {

        

    });

    describe('DELETE /products/{id}', function() {

        

    });

});
