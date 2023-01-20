import axios from 'axios';
let token;

async function Login (code = 200) {
  try {
    const config = { 
        headers: { 
            Authorization: `Bearer ${token}` 
        }
    }
    const bodyParameters = {
        'username': 'xxx666.maev',
        'password': 'Q!q12345678'
    };
    const responce = await axios.post('https://api.staging.mono.tod.sh/api/v1/login', bodyParameters, config);
// console.log(responce)
    const status = responce.status;
    if (status === code) {
      console.log(`Responce was successful. Status code: ${responce.status}`);
    } else {
      console.log(`Responce failed. Status code: ${responce.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}
await Login();
const service = axios.create({
  timeout: 20000 // request timeout
});

service.interceptors.request.use( // request interceptor
  config => {

  config.headers = {'Authorization': `bearer ${token}`} // Do something before request is sent
  return config;
  },
  error => {
  Promise.reject(error);
  }
);

axios.defaults.headers.common = {'Authorization': `bearer ${token}`};
export default { axios, Login };