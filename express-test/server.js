'use strict';

var host = "127.0.0.1";
var port = "5640"

var fs = require('fs');
var express = require('express');

var app = express();

// 可以直接访问静态资源文件,而不需要做任何的配置
// . is root directory
app.use(express.static('.'));

app.use(function(req, res, next){
    if (req.path === '/') {
        loadMainPage(req, res);
    } else {
        next();
    }
});

app.get('/list', function(req, res){
    res.send({
        result: true
    });
});

app.listen(port, host, function(e){
    console.log('listen');
});

function loadMainPage(req, res){
    fs.readFile('./index.html', function(err, data){
        var content = data.toString();
        res.end(content);
    });
}