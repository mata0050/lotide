const assertEqual = require('../assertEqual');
const {eqArrays, results1, results2} = require('../takeUntil')
;
// TEST CODE
assertEqual(eqArrays(results1, [1, 2, 5, 7, 2]), true);
assertEqual(eqArrays(results2, ["I've", 'been', 'to', 'Hollywood']), true);