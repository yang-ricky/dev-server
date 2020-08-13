var Koa = require('koa');
var app = new Koa();
var static = require('koa-static');
var route = require('koa-route');
const httpProxy = require('koa2-proxy-middleware');
const bodyparser = require('koa-bodyparser')

const proxyOptions = {
    targets: {
        '/koa/getExpressList': {
            target: 'http://localhost:5640',
            changeOrigin: true,
            pathRewrite: {'^/koa/getExpressList': '/express/list'},
        },
        '/koa/getName': {
            target: 'http://localhost:5640',
            changeOrigin: true,
            pathRewrite: {'^/koa/getName': '/express/getUser'},
        },
    }
}

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))

app.use(httpProxy(proxyOptions));

const main = async (ctx, next) => {
    ctx.response.body = 'Hello World';
};

// 让 koa 可以处理静态资源文件
app.use(static('.'));


app.use(route.get('/koa/list', (ctx, next) => {
  ctx.response.body = {
  	result: 'koalist'
  };
}));

app.use(route.get('/koa/getUser', (ctx, next) => {
  ctx.response.body = {
    result: 'getUser from koa'
  };
}));

app.use(main);


app.listen(5641);