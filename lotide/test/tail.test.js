const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']);

tail([5, 3, 2]);
