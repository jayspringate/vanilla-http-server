'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

require('../server');

describe('time route', function () {
	it('should respond to GET request', function(done) {
		chai.request('localhost:3000')
			.get('/time')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.status).to.eql(200);
				expect((res.body.msg).split(' ', 2)).to.eql('time is '.split(' ', 2));
				done();
			});
	});
});