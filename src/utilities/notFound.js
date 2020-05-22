import urlHelper from './urlHelper';

function notFound() {
  return async (ctx,next) => {
    await next();

    if (404 != ctx.status && 500 != ctx.status && 204 != ctx.status) return;

		ctx.status == 404;
		ctx.type = 'html';
    await ctx.render('message/error');
    // we need to explicitly set 404 here
    // so that koa doesn't assign 200 on body=
		if(ctx.status == 404){
			ctx.status = 404;
			switch (ctx.accepts('html', 'json')) {
      case 'html':
        ctx.type = 'html';
        await ctx.render('message/error');
        break;
      case 'json':
        ctx.body = {
          message: 'Page Not Found'
        };
        break;
      default:
        ctx.type = 'text';
        ctx.body = 'Page Not Found';
    	}
		}
			if(ctx.status == 204){
			ctx.status = 204;
			switch (ctx.accepts('html', 'json')) {
      case 'html':
        ctx.type = 'html';
        await ctx.render('message/error');
        break;
      case 'json':
        ctx.body = {
          message: 'No content'
        };
        break;
      default:
        ctx.type = 'text';
        ctx.body = 'No content';
    	}
		}
		if(ctx.status == 500){
			ctx.status = 500;
			switch (ctx.accepts('html', 'json')) {
      case 'html':
        ctx.type = 'html';
        await ctx.render('message/error');
        break;
      case 'json':
        ctx.body = {
          message: 'Internal Server Error'
        };
        break;
      default:
        ctx.type = 'text';
        ctx.body = 'Internal Server Error';
    	}
		}

  }
}

module.exports = notFound;
