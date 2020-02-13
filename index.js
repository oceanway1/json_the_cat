const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, body) => {
  if (error) {
    console.log('Error fetch details');
  } else {
    console.log(body);
  }
});