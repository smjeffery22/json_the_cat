const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns Error fetch details for invalid url, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(desc, undefined);

      const expectedDesc = `Error: getaddrinfo ENOTFOUND api.thectapi.com`;

      assert.equal(expectedDesc, err);

      done();
    });
  });
});