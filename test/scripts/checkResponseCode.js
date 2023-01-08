function checkResponseStatusCode(statusCode) {

  if (statusCode === 200 || statusCode === 201 || statusCode === 202 || statusCode === 204) {
    return "Success";
  } 
  else if (statusCode === 404) {
    return "Not Found";
  } 
  else if (statusCode === 301) {
    return "Moved Permanently";
  } 
  else if (statusCode === 500 || statusCode === 502 || statusCode === 503 || statusCode === 504 || statusCode === 505) {
    return "Internal Server Error";
  }
   else {
    return "Other Error";
  }

}

const responseCheck = checkResponseStatusCode();

export default responseCheck;
