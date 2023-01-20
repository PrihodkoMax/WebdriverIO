import fs from 'fs';

const jsonData = { _headers: {
    'access-control-allow-origin': 'https://account.staging.mono.tod.sh',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'Content-Type, Authorization',
    'strict-transport-security': 15724800,
    'access-control-allow-credentials': true,
    'access-control-expose-headers': 'Authorization',
    'Content-Type': 'application/json',
    'Cache-control': 'no-cache, private'
  },

get headers() {
    return this._headers;
  },
set headers(value) {
    this._headers = value;
  },
}

const jsonString = JSON.stringify(jsonData);

fs.writeFile('data.json', jsonString, err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });

fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return
    }
    try {
      const data = JSON.parse(jsonString);
      console.log("Data from file: ", data);
    } catch(err) {
      console.log('Error parsing JSON string:', err);
    }
  });


export default { jsonString, jsonData }
