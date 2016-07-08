var http = require('http');
var url = require('url');

function start(route, handle){
	http.createServer(function(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log('request for ' + pathname + ' recieved');

		route(handle, pathname, res, req);
		
	}).listen(8888);
	console.log('Server started.');
}

exports.start = start;
