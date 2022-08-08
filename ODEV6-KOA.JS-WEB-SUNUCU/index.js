'use strict';

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = '<h1>Hello World</h1>';
});
router.get('/index', (ctx) => {
  ctx.body = '<h1>INDEX SAYFASI</h1>';
});

router.get('/hakkimda', (ctx) => {
  ctx.body = '<h1>HAKKIMDA SAYFASI</h1>';
});

router.get('/iletisim', (ctx) => {
  ctx.body = '<h1>ILETISIM SAYFASI</h1>';
});

router.get('error', '/error', (ctx) => {
  ctx.throw(500, 'internal server error');
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);