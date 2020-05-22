import router from 'koa-router';
import DashboardRouter from './routers/DashboardRouter';
import ApiRouter from './routers/ApiRouter';

const Router = router();
Router.use(DashboardRouter.routes());
Router.use(ApiRouter.routes());

module.exports = Router;
