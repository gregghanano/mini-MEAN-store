var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose');

require('./server/config/routes')(app);

app.listen(8000, function(){
	console.log('Listening on port 8000');
})