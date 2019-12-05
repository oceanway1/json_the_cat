const input = process.argv.slice(2);
const request = require('request');
const data = JSON.parse(body);
request('https://api.thecatapi.com/v1/breeds/search?q=' + input, (error, response, body) => {
  if (error) {
    console.log('error, breed', error);
  }
  else if (response) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
  let result = "";
  // console.log(data);
  console.log(data[0].description)
  // console.log(data['descripton']);
  // console.log(data.description[0]);
  //   for ( let item of data) {
  //  result = data[0];
  // return result;
});