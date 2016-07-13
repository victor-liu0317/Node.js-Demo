var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('index.html');
});

app.post('/login', urlencodedParser, function(req, res){
	// 输出 JSON 格式
   response = {
       username:req.body.username,
       password:req.body.password
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

var server = app.listen(3000, function(){
  	var host = server.address().address;
  	var port = server.address().port;
	console.log("访问地址为 http://%s:%s", host, port);

});
