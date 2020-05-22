import fetch from 'node-fetch';

var authToken;

function setOptions(method, data = {}){
  const headers = {
    //'Authorization': '',
    'x-access-token': '',
    'Content-Type': process.env.TYPE
  };

  if(method == 'GET') {
    return {
      method: method,
      headers: headers
    };
  } else {
    return {
      method: method,
      headers: headers,
      body: JSON.stringify(data)
    };
  }
};

function * getToken() {
  const authData = {
    //consumer_key: process.env.CONSUMER_KEY,
    //secret_key: process.env.SECRET_KEY,
    client_id: process.env.ACCOUNT,
    password: process.env.PASS
  };
  const options = setOptions('POST', authData);
  const source = process.env.API_AUTH;
  const result = yield fetch(source, options)
    .then(res => res.json())
    .then(data => data);
  console.log(result);
  authToken = result.token;
};

function * getInformation(source, options, times = 0) {

  //if(typeof authToken !== 'undefined'){
  //  options.headers['Authorization'] = `Bearer{${authToken}}`;
  //}
  options.headers['x-access-token'] = authToken;

  const result = yield fetch(source, options)
    .then(res => res.json())
    .then(data => data);

  if((result.message == 'Token error' || result.success == false) && times < 1) {
    times++;
    yield getToken();
    return yield getInformation(source, options, times);
  }

  return result;
};


module.exports = {
  getInformation: getInformation,
  setOptions: setOptions,
};
