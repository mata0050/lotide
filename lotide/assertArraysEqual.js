// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Fail: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  let result = '';
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== typeof arr2[i]) {
      return false;
    }

    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    }

    return result;
  }
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true);
