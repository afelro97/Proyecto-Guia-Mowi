import fetch from 'node-fetch';
import _ from 'lodash';
import {POST,PUT,PATCH} from './constants/constants'

module.exports.consumer = async (url,method,body) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  let options;
  if(method){
    options = {
      method: method,
      headers,
      body: JSON.stringify(body),
    }
  }else{
    options = {
      method: 'GET',
    }
  }
  var status =  '';
  const response = await fetch(url,options)
  .then(res => {
        status = res.status;
        if(!_.isEqual(res.status+'', '200')){
        }
        return res.json();
      }
    )
    .then(data => {
      var dataWithStatus = {
        body:data,
        status:status,
      }
      //Agregar el satatus en el body
      return dataWithStatus
    })
    .catch((err) => {
      console.log('-------INI-ERROR-------');
      console.log('ERROR: api.js');
      console.log('URL: '+ url);
      console.log('METHOD: '+ (method || 'GET'));
      console.log("BODY:", body);
      console.log("MESSAGE:", err);
      console.log('-------END-ERROR-------');
    });
    return response || {status:status };
  // return {};
};


module.exports.resetPassword = async (body) => {
  console.log('---API--- : resetPassword');
  const url = `${process.env.API_BASE_URL}/user/resetPassword`;
  const response = await module.exports.consumer(url,PUT,body);
  return response;
}
module.exports.changePassword = async (body) => {
  console.log('---API--- : changePassword');
  const url = `${process.env.API_BASE_URL}/user/changePassword`;
  const response = await module.exports.consumer(url,PUT,body);
  return response;
}
module.exports.generatePasswordToken = async (body) => {
  console.log('---API--- : generatePasswordToken');
  const url = `${process.env.API_BASE_URL}/user/generatePasswordToken?email=${body.email}`;
  const response = await module.exports.consumer(url);
  return response;
}
module.exports.findByToken = async (body) => {
  console.log('---API--- : findByToken');
  const url = `${process.env.API_BASE_URL}/user/findByToken?passwordToken=${body.generateToken}`;
  const response = await module.exports.consumer(url);
  return response;
}
module.exports.massiveUserUpload = async (body) => {
  console.log('---API--- : massiveUserUpload');
  const url = `${process.env.API_BASE_URL}/user/massiveUserUpload`;
  const response = await module.exports.consumer(url,PUT,body);
  console.log(url)
  console.log(response)
  return response;
}
module.exports.validPassword = async (body) => {
  console.log('---API--- : validPassword');
  const url = `${process.env.API_BASE_URL}/user/validPassword`;
  const response = await module.exports.consumer(url, POST, body);
  return response;
}
module.exports.listWithComponents = async (body) => {
  console.log('---API--- : listWithComponents');
  const url = `${process.env.API_BASE_URL}/page/listWithComponents`;
  const response = await module.exports.consumer(url);
  return response;
}
module.exports.listWithFunctionsByUserId = async (body) => {
  console.log('---API--- : listWithFunctionsByUserId');
  const url = `${process.env.API_BASE_URL}/page/listWithFunctionsByUserId`;
  const response = await module.exports.consumer(url);
  return response;
}
module.exports.getUser = async (body) => {
  console.log('---API--- : getUser');
  const url = `${process.env.API_BASE_URL}/user/${body.userCode}`;
  const response = await module.exports.consumer(url);
  return response;
}
module.exports.listUsers = async (body) => {
  console.log('---API--- : listUsers');
  const url = `${process.env.API_BASE_URL}/user`;
  let response = ''
  if(body.rol){
    let urlRol = `${url}?rol=${body.rol}`
    console.log('urlRol',urlRol)
    response = await module.exports.consumer(url);
  }else{
     response = await module.exports.consumer(url);
     console.log('urlRol',url)
  }

  return response;
}
module.exports.login = async (body) => {
  console.log('---API--- : Login');
  const url = `${process.env.API_BASE_URL}/user/signIn`;
  const response = await module.exports.consumer(url,POST,body);
  console.log('Response', response);
  console.log(url);
  return response;
}
