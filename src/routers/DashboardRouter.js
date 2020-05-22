import router from 'koa-router';
import body from 'koa-body';

import DashboardController from '../controllers/DashboardController';

const Router = router();
const koaBody = body();

/*Login*/
Router.get('/', DashboardController.showHome);


module.exports = Router;
