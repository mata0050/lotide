const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Fail: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    // console.log(key, object1[key])
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// TEST
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };

const abc = { a: '1', b: '2', c: '3' };

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };

const cd2 = { c: '1', d: ['2', 3, 4] };

const objArr1 = { a: [1, 2, 3], b: [1, 2, 3] };
const objArr2 = { a: [1, 2, 3], b: [1, 2, 3] };
console.log(assertObjectsEqual(eqObjects(objArr1, objArr2), true)); // => false

assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(ab, abc), false);
assertObjectsEqual(eqObjects(cd, dc), true);
assertObjectsEqual(eqObjects(cd, cd2), false);
