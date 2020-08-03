'use strict';

var host = "127.0.0.1";
var port = "5640"

var express = require('express');

var app = express();

app.use(function(req, res, next){
    res.end('debug');
    next();
});

app.listen(port, host, function(e){
    console.log('listen');
});