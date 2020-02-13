const request = require('request');
let result;
const fetchBreedDescription = function(breedName, callback) {
  breedName = process.argv.slice(2);
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    // console.log(breedName)
    //  console.log("response----------", response)
    // console.log("body----------", body)
    const data = JSON.parse(body);
    // console.log("data-------------", data);
    result = data[0].description;
    callback(result);
    if (error !== null) {
      console.log('error, breed', error);
    }
    if (!response) {
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    }
  });
  function callback(result) {
    console.log(result);
  }
};
fetchBreedDescription();




