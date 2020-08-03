var Koa = require('koa');
var app = new Koa();
var static = require('koa-static');
var route = require('koa-route');

const main = ctx => {
    ctx.response.body = 'Hello World';
};

// 让 koa 可以处理静态资源文件
app.use(static('.'));

// 定义路由, note: 这里的use顺序会影响最终的结果
app.use(route.get('/koa/list', ctx => {
  ctx.response.body = {
  	result: 'koalist'
  };
}));

app.use(main);

app.listen(5641);