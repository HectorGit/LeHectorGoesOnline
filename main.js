var express = require("express");
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8081;
var http = require("http");

var basicRouter = express.Router();

const crypt = require('./encrypt.js');
const encUser = '1666b7c32ae79160cfff9a3411b0b84b5020c9e7e914cd';//= process.env.encUser;
const encPassword ='1670bbca2ce98c7b91a098';//= process.env.encPassword;

basicRouter.use(express.static(__dirname + '/public'));
basicRouter.use(express.static(__dirname + '/public/resources/images'));
basicRouter.use(express.static(__dirname + '/public/views/pages'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
	next();
});

//change to redeploy
// log all requests to the console
app.use(morgan('dev'));


//----NEW----
basicRouter.post('/contact', function(req,res){

	var transporter = nodemailer.createTransport(smtpTransport({
		service: 'Gmail',
		auth: {
			user: crypt.decrypt(encUser),
			pass: crypt.decrypt(encPassword),
		}, 
	}));
	
	var mailOptions  = {
		from: crypt.decrypt(encUser),
		to : crypt.decrypt(encUser), 
		subject : 'Message Confirmation: Message from: ' + req.body.name,
		text : 'Message: \n\n' + req.body.message + '\n\n' + '-------- CONTACT INFO ---------  \n\n'+'Telephone: '+ req.body.telephone + '\n\n' + 'E-mail: '+ req.body.email
		//html: <b>Hello World<\b>
	}
	
	transporter.sendMail(mailOptions, function(error,info){
		if(error){
			console.log(error);
			//res.json({yo: 'error'});
			//res.end();
		}else{
			console.log('Message sent: ' + info.response);
			//res.json({yo: info.response});
			//res.end();
		};
	});
	
	res.sendFile(path.join(__dirname + '/public/views/index.html'));

});

basicRouter.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//APPLYING THE ROUTES TO OUR APP
app.use('/',basicRouter);
app.listen(port);

console.log('Magic happens on port ' + port);