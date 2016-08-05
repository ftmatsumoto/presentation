var path = require('path');
var expect = require('chai').expect;
var request = require('supertest');

var app = require(path.join(__dirname, '..', './server.js'));

describe('server()', function () {
  'use strict';

  it('exists', function () {
    expect(app).to.be.a('function');
  });

  it('responds with a 200 (OK)', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
