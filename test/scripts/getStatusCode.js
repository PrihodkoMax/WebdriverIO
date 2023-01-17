import axios from 'axios';
import { url } from 'inspector';


//export default StatusCode();
async function getStatusCode(status,code, url) {
  try {
    const response = await axios.get(url);
    const headers = {
        'access-control-allow-credentials': 'true',
        'access-control-allow-origin': 'https://account.staging.mono.tod.sh',
        'Content-Type': 'application/json',
        'Cache-control': 'no-cache, private'
    };
    const status = response.status;
    if (status === code) {
      return console.log('Responce Status Code is Success -->', status,'(',true,')');
    } else {
      return console.log('Responce Status Code is Failed -->', status,'(',false,')');
    }
  } catch (error) {
    console.error(error);
  }
  return status;
}

export default getStatusCode();