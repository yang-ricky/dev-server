'use strict';

var host = "127.0.0.1";
var port = "5640"

var fs = require('fs');
var express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

var app = express();

// 可以直接访问静态资源文件,而不需要做任何的配置
// . is root directory
app.use(express.static('.'));

// 根据URL 转发请求到相应的服务器
// 例子: http://localhost:5640/api/school-proxy/list -> http://localhost:8080/api/school-proxy/list
// 替换的仅仅是服务器域名和端口
app.use(createProxyMiddleware('/express/getKoalist',
    { 
        target: "http://localhost:5641",
        pathRewrite: {'^/express/getKoalist': '/koa/list'},
    }
));

app.use(function(req, res, next){
    if (req.path === '/') {
        loadMainPage(req, res);
    } else {
        next();
    }
});

app.get('/express/list', function(req, res){
    res.send({
        result: "express list"
    });
});

app.get('/express/getUser', function(req, res){
    res.send({
        result: "getUser from express"
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