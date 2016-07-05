var http = require('http');
var url = require('url');

function start(route, handle){
	http.createServer(function(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log('request for ' + pathname + ' recieved');

		var content = route(handle, pathname);

		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write(content);
		res.end();
	}).listen(8888);
	console.log('Server started.');
}

exports.start = start;
