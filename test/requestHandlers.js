var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start(res, req){
	console.log("Request handler 'start' was called.");
	
	var body = '<html><head><meta charset="UTF-8"></head>'+
				'<body><form action="/upload" enctype="multiple/form-data" method="post">'+
				'<input type="file" name="upload" multiple="multiple">'+
				'<input type="submit" value="Upload file"></form>'+
				'</body></html>';

	res.writeHead(200, {"Content-Type":"text/html"});
	res.write(body);
	res.end();	
}

function upload(res, req){
	console.log("Request handler 'upload' was called.");

	var form = new formidable.IncomingForm();
	form.uploadDir = 'tmp';
	console.log("about to parse...");
	form.parse(req,function(error, fields, files){
		console.log("parsing done...");
		fs.renameSync(files.upload.path,"./tmp/test.png");
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write("recieved img:<br/>");
		res.write("<img src='/show' />");
		res.end();
	});
}

function show(res, req){
	console.log("Request handler 'show' was called.");
	fs.readFile("./tmp/test.png","binary",function(error,file){
		if(error){
			res.writeHead(500, {"Content-Type":"text/plain;charset=utf-8"});
			res.write(error);
			res.end();
		}else{
			res.writeHead(200, {"Content-Type":"image/png"});
			res.write(file,"binary");
			res.end();
		}
	});
	
}

exports.start = start;
exports.upload = upload;
exports.show = show;
