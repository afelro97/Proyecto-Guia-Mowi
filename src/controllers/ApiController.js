import Api from './Api';
const koa = require('koa');
import _ from 'lodash';
const userAgent = require('koa-useragent');

module.exports.login = async (ctx,next) => {
  const body = ctx.request.body;
  let response = await Api.login(body);

  //console.log('Response', response);
  if(!response.code) {
    if(response.body.roles){
      ctx.session.user=response.body;
    //ctx.session.allAccess=(response.idOrganization)?false:true;
    } else {
      console.log('Fallo', response)
      if(response.status && response.body){
      }else{
        response =  {
          status:800,
          body:{
              code: 800,
              message:'Intente nuevamente o contacte al administrador.'
            }
        }
      }
    }
  }
  ctx.status = response.status;
  ctx.body = JSON.stringify(response.body);
}

/////////////////////USER///////////////////////
module.exports.getUser = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.getUser(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.listUsers = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.listUsers(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.resetPassword = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.resetPassword(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.changePassword = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.changePassword(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.generatePasswordToken = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.generatePasswordToken(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.findByToken = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.findByToken(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.validPassword = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.validPassword(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;
}
module.exports.listWithComponents = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.listWithComponents(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.listWithFunctionsByUserId = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.listWithFunctionsByUserId(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.resetPassword = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.resetPassword(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
module.exports.changePassword = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.changePassword(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}
//user massive
module.exports.massiveUserUpload = async (ctx,next) => {
  const body = ctx.request.body;
  const response = await Api.massiveUserUpload(body);
  ctx.body = JSON.stringify(response.body);
  ctx.status = response.status;

}