'use strict';

var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var afterEach = lab.afterEach;
var server = require('../../');
var db = server.database;

describe('Routes /stores', function() {

    describe('GET /stores', function() {

        it('returns 200 HTTP status code', function(done) {
            var options = {method: 'GET', url: '/stores'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(200);
                done();
            });
        });

    });

    describe('GET /stores/{id}', function() {

        it('validates id in url parameter', function(done) {
            var options = {method: 'GET', url: '/stores/1'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

    });

    describe('POST /stores', function() {

        it('fails when there\'s no payload', function(done) {
            var options = {method: 'POST', url: '/stores'};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

        it('fails with an invalid payload', function(done) {
            var options = {method: 'POST', url: '/stores', payload: {}};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

        it('fails when there\'s too many properties in the payload', function(done) {
            var options = {method: 'POST', url: '/stores', payload: {storeid: 'a storeid', something: 'else'}};
            server.inject(options, function(response) {
                response.statusCode.should.be.exactly(400);
                done();
            });
        });

    });

    describe('PUT /stores/{id}', function() {

        

    });

    describe('DELETE /stores/{id}', function() {

        

    });

});
