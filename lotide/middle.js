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

const middle = function (arr) {
  const length = arr.length;
  let middleNum = Math.floor(length / 2);
  let result = arr[middleNum];
  if (length === 1 || length === 2) return `[]`;
  if (length % 2 === 0) return `[${arr[middleNum - 1]}, ${arr[middleNum]}]`;
  return `[${result}]`;
};

// TEST CODE
assertEqual(middle([1]), `[]`);
assertEqual(middle([1, 2]), `[]`);

assertEqual(middle([1, 2, 3]), `[2]`);
assertEqual(middle([1, 2, 3, 4, 5]), `[3]`);

assertEqual(middle([1, 2, 3, 4]), `[2, 3]`);
assertEqual(middle([1, 2, 3, 4, 5, 6]), `[3, 4]`);
