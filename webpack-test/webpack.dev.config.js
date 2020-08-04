const path = require('path');
const webpack = require('webpack');
const SOURCE_DIR = path.resolve(__dirname, '.');

const MODE = 'development';
process.env.BABEL_ENV = MODE;
process.env.NODE_ENV = MODE;

const loginConfig = (env ={}) => {

    return {
        context: SOURCE_DIR,
        entry: './empty.js',  // 必须指定一个entry
        devServer: {
            contentBase: SOURCE_DIR,
            historyApiFallback: true,
            publicPath: '/',
            overlay: true,
            compress: true,
            port: 5642,
            proxy: {
                '/express/list': { // http://localhost:5642/express/list -> http://localhost:5640/express/list 
                    target: 'http://localhost:5640',
                    secure: false,
                    changeOrigin: true,
                },
                '/koa/list': { // http://localhost:5642/koa/list -> http://localhost:5641/koa/list 
                    target: 'http://localhost:5641',
                    secure: false,
                    changeOrigin: true,
                },
                '/koa/getName': { // http://localhost:5642/koa/getName -> http://localhost:5641/koa/getUser 
                    target: 'http://localhost:5641',
                    pathRewrite: {'^/koa/getName': '/koa/getUser'}, // 用新的url 替换 老的url片段
                    secure: false,
                    changeOrigin: true,
                }
            },
            //hot: true,
        }
    }
};

module.exports = [loginConfig]
