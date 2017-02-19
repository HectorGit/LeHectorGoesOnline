
/*var http = require('http');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>Euro 2012 teams</h1>\n' + 
    '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' + 
    '\n\n');
  res.end();
}).listen(8081, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8081');

*/

var http = require("http");
var express = require("express");
var path = require('path');
//var bodyParser = require ('body-parser');

//var bootstrap = require("bootstrap");
var app = express();

//app.use(bodyParser());
app.use(express.static(__dirname + '/htmldocs'));
app.use(express.static(__dirname + '/resources'));
//app.use(express.static(__dirname + '/resources/bootstrap-3.3.7'));
app.use(express.static(__dirname + '/resources/images'));
//app.use(express.static(__dirname + '/references'));

//assuming app is express Object.
app.get('/',function(req,res){
	res.sendFile('index.html', {
		title:'Home'
	});
});

app.listen(8081);

// Console will print the message
//console.log(path.join(__dirname+'/htmldocs/index.html'));
console.log('Server running at http://127.0.0.1:8081/');
