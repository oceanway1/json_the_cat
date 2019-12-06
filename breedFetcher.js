const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, body) => {
    const data = JSON.parse(body);
    let result = data[0].description;
    callback(error, result);
    // if (error === null) {
    //   console.log('error, breed', error);
    // }
    //else if (response) {
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // }
    // // let result = "";
    // // console.log(data);
    // console.log(data[0].description)
    // console.log(data['descripton']);
    // console.log(data.description[0]);
  });
};
module.exports = {
  fetchBreedDescription
};