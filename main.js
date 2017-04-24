var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8081;
var http = require("http");

var basicRouter = express.Router();

basicRouter.use(express.static(__dirname + '/public'));
basicRouter.use(express.static(__dirname + '/public/resources/images'));
basicRouter.use(express.static(__dirname + '/public/views/pages'));

//I don't know if we need this anymore.
//with ngRoute do we still have access to GET and POST?
//now using Angular Routing NOT Express Routing.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
	next();
});

// log all requests to the console
app.use(morgan('dev'));

basicRouter.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//APPLYING THE ROUTES TO OUR APP
app.use('/',basicRouter);
app.listen(port);

console.log('Magic happens on port ' + port);