'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {

	var name = req.url.replace('/greet/','');
	
	if (req.url === '/time') {
		res.writeHead(200, {
			'Content-Type:': 'application/json'
	
		});

		res.write(JSON.stringify({msg: 'time is ' + ((new Date()).getTime())}));
		res.end();
	}

	else if (req.url === ('/greet/' + name)) {
		res.writeHead(200, {
			'Content-Type:': 'application/json'
		});

		res.write(JSON.stringify({msg: 'hello ' + name}));
		res.end();
	}

	else if (req.method === 'POST' && req.url === '/greet') {
		res.writeHead(200, {
			'Content-Type:': 'application/json'
		});

		req.on('data', function(data) {
			var body = JSON.parse(data.toString('utf-8'));
			res.write(JSON.stringify({msg: 'hello ' + body.name}));
			res.end();
		});
	} else {

		res.writeHead(404, {
			'Content-Type:': 'application/json'
		});

		res.write(JSON.stringify({msg: 'could not find page'}));
		res.end();
	}
});

server.listen(3000, function() {
	console.log('server started');
});