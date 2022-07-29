const koa = require('koa')
const router = require('./routes/router')

const app = new koa();

app.use(router.routes());
app.listen(3000);