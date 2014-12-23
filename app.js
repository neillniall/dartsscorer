var express = require('express');
var path = require('path');
var http = require('http');
var https = require("https");
var jsonQuery = require('json-query')

var Util = require('util');
var Tls = require('tls');

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;
var host = process.env.OPENSHIFT_NODEJS_IP || process.env.VCAP_APP_HOST || "127.0.0.1";

var app = express();

app.set('port', port);
app.use(express.compress());

app.use(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

var util = require('util');

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

configureRoutes();

app.use(express.static(path.join(__dirname, '/webapp')));

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

function configureRoutes() {
	
  app.get('/', function (req,res){
		
	
	});	
}
