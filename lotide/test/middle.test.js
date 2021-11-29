const assertEqual = require('../assertEqual');
const middle = require('../middle');

// TEST CODE
assertEqual(middle([1]), `[]`);
assertEqual(middle([1, 2]), `[]`);

assertEqual(middle([1, 2, 3]), `[2]`);
assertEqual(middle([1, 2, 3, 4, 5]), `[3]`);

assertEqual(middle([1, 2, 3, 4]), `[2, 3]`);
assertEqual(middle([1, 2, 3, 4, 5, 6]), `[3, 4]`);