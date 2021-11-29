const assertEqual = require('../assertEqual');
const { eqArrays, results1 } = require('../map');

// TEST CODE
assertEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true);
