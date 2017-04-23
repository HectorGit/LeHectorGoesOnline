var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8081;
var http = require("http");

var basicRouter = express.Router();

basicRouter.use(express.static(__dirname + '/htmldocs'));
basicRouter.use(express.static(__dirname + '/resources'));
basicRouter.use(express.static(__dirname + '/resources/images'));

// APP CONFIGURATION ---------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
	next();
});

// log all requests to the console
app.use(morgan('dev'));

//MIDDLEWARE - (prerequest operations)
basicRouter.param('name', function(req, res, next, name) {
// do validation on name here
// blah blah validation
// log something so we know its working
console.log('doing name validations on ' + name);
// once validation is done save the new item in the req
req.name = name;
// go to the next thing
next();
});

//app.controller('contactCtrl', function($scope, $http) {
//   $scope.sub = function() {
//       $http.post('/contact',$scope.formData).
//       success(function(data) {
//           console.log("posted successfully");
//       }).error(function(data) {
//           console.error("error in posting");
//       })
//   }
//});

//NORMAL ROUTES/ REQUESTS

//assuming app is express Object.
basicRouter.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/htmldocs/index.html'));
	//res.json({message:'what is going on?'});
});

basicRouter.get('/recent_projects', function(req,res){
	res.sendFile(path.join(__dirname + '/htmldocs/recent_projects.html'));
	//res.json({ message: 'hooray! welcome to our api!' });
});

basicRouter.get('/contact', function(req,res){
	res.sendFile(path.join(__dirname + '/htmldocs/contact.html'));
});

//basicRouter.post('/contact', function(req,res){
//    console.log('name:'+ req.body.name);
//	res.json({name:req.body.name});
//});

basicRouter.get('/bio', function(req,res){
	res.sendFile(path.join(__dirname + '/htmldocs/bio.html'));
});

basicRouter.get('/releases', function(req,res){
	res.sendFile(path.join(__dirname + '/htmldocs/releases.html'));
});

basicRouter.get('/rec_experience', function(req,res){
	res.sendFile(path.join(__dirname + '/htmldocs/rec_experience.html'));
});

basicRouter.get('/users/:name', function(req, res) {
  res.send('hello ' + req.params.name + '!');
});

//APPLYING THE ROUTES TO OUR APP
app.use('/',basicRouter);
app.listen(port);

console.log('Magic happens on port ' + port);