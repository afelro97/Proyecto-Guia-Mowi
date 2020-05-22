import {fetch} from 'whatwg-fetch';

export default async (source,method,data,statusCallback) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  let options;
  if(data && method!='GET'){
    options = {
      method: method,
      credentials: 'same-origin',
      headers,
      body: JSON.stringify(data),
    }
  }else{
    options = {
      method: 'GET',
    }
  }
  var resultStatus="";
  const result = await fetch(`/${source}`, options)
    .then(res => {
      resultStatus=res.status;
      return res.json()
    
    })
    .then(data => data)
    .catch(function error(error) {
        console.log('request failed', error); // error could either be a network or a runtime error
        console.log('este es un mensaje');
        return null;
    });
    if(statusCallback){
      statusCallback(resultStatus);
    }
  return result;
}
