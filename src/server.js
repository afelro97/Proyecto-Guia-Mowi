'use strict';

require('@babel/polyfill');
require('@babel/register')({
  "plugins": [

    "@babel/plugin-proposal-function-bind",

    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
    "@babel/plugin-proposal-do-expressions",

    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",

    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    "@babel/plugin-proposal-json-strings",
    "@babel/plugin-transform-modules-commonjs"
  ],
});

require('dotenv').config();

const session = require('koa-session');
const koa = require('koa');
const router = require('./routes');
const serve = require('koa-static');
const nunjucksRender = require('koa-nunjucks-render2');
//const Boom = require('boom');
const userAgent = require('koa-useragent');

const config = require('./config/config');

const app = new koa();

app.keys = [process.env.SESSION_KEY];
app.use(session(app));
app.use(userAgent);

app.poweredBy = false;

const nunjucksOptions = {
  ext: '.html',
  noCache: config.NODE_ENV === 'development',
  throwOnUndefined: true,
  globals: {
    NODE_ENV: config.NODE_ENV,
    BASE_URL: config.HOSTNAME,
  },
};

app
  .use(require('koa-compress')())
  .use(serve('assets',{
    maxage: 604800000,
  }))
  .use(nunjucksRender('views', nunjucksOptions))
  .use(require('./utilities/notFound')())
/*  .use(require('koa-html-minifier')({
    collapseWhitespace: true
  }));*/
app
  .use(router.routes())
/*  .use(router.allowedMethods({
    throw: true,
    notImplemented: () => new Boom.notImplemented(),
    methodNotAllowed: () => new Boom.methodNotAllowed('that method is not allowed')
  }));*/

app.listen(config.PORT, function() {
  console.log('Listening on port', config.PORT);
});
