import router from 'koa-router';
import body from 'koa-body';

import ApiController from '../controllers/ApiController';

const Router = router();
const koaBody = body({
    "formLimit":"50mb",
    "jsonLimit":"50mb",
    "textLimit":"50mb"
});
////////////////////

Router.post('/login', koaBody, ApiController.login);

module.exports = Router;
