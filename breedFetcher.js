const request = require("request");



const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    // Error
    // const error404 = `{"message":"404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"}`;
    
    if (error) {
      return callback(error);
      // console.log('Error!\n', error);
      // return;
    }
     
    // if (body === error404) {
      
    //   console.log('Error!\n', error404);
    //   return;
    // }
    
    // Parse the content into object
    const data = JSON.parse(body);
  
    // Breed Not Found
    if (data.length === 0) {
      // When there is a successful response, error is null so null needs to be included as the first argument since the callback function from index.js requires error as the first argument
      return callback(null, 'Breed not found');
      // console.log("Such breed does not exist. Try again.");
      // return;
    }
    
    // Prints the description of the breed
    return callback(null, data[0]['description']);
    // console.log('description:', data[0]['description']);
  });
};

module.exports = { fetchBreedDescription };