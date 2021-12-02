const request = require("request");

const breedName = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

request(url, (error, response, body) => {
  // Error
  const error404 = `{"message":"404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"}`

  if (error) {
    console.log('Error!\n', error);
    return;
  }

  if (body === error404) {
    console.log('Error!\n', error404);
    return;
  }
  
  // Parse the content into object
  const data = JSON.parse(body);

  // Breed Not Found
  if (data.length === 0) {
    console.log("Such breed does not exist. Try again.");
    return;
  }
  
  // Prints the description of the breed
  console.log('description:', data[0]['description']);
});