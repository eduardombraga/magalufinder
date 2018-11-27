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

        it('fails when there\'s no payload', function(done) {
            var options = {method: 'POST', url: '/products'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

        it('fails with an invalid payload', function(done) {
            var options = {method: 'POST', url: '/products', payload: {}};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

        it('fails when there\'s too many properties in the payload', function(done) {
            var options = {method: 'POST', url: '/products', payload: {productname: 'a products', something: 'else'}};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

    });

    describe('PUT /products/{id}', function() {

        

    });

    describe('DELETE /products/{id}', function() {

        

    });

});
