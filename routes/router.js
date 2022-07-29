const Router = require('koa-router');
const controller = require('../controllers/controller');

const router = new Router();

router
    .get('/app', controller.showHelloWorld);


module.exports = router;