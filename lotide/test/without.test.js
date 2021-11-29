const assertEqual = require('../assertEqual');
const without = require('../without');


without([1, 2, 3], [1]);
without(['1', '2', '3'], [1, 2, '3']);
const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);

// TEST CODE
assertEqual(words, ['hello', 'world', 'lighthouse']);