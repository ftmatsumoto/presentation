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

  it('responds with a Hello HRR17!', function (done) {
    request(app)
      .get('/')
      .expect('Hello HRR17\n', done);
  });

  // it('does something', function () {
  //   expect(true).to.equal(true);
  // });

  // Add more assertions here
});
