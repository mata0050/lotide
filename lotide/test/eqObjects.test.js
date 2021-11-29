const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// TEST
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };

const abc = { a: '1', b: '2', c: '3' };

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };

const cd2 = { c: '1', d: ['2', 3, 4] };

const objArr1 = { a: [1, 2, 3], b: [1, 2, 3] };
const objArr2 = { a: [1, 2, 3], b: [1, 2, 3] };
console.log(assertEqual(eqObjects(objArr1, objArr2), true)); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
