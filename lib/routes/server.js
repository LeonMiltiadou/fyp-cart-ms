"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var routes = require('./');

var cors = require('cors');

var app = express();
var port = process.env.PORT || 8000; // parse application/json

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
app.listen(port, function () {
  console.log('Server started on port: ' + port);
});