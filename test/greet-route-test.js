'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

require('../server');

describe('greet route', function () {
	it('should respond to POST request', function(done) {
		chai.request('localhost:3000')
			.post('/greet')
			.send({name: 'jay'})
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.status).to.eql(200);
				expect(res.body.msg).to.eql('hello jay');
				done();
			});
	});
});








