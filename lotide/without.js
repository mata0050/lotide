// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  let result = '';
  if (actual.length !== 0) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        result = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
      } else {
        result = `🛑🛑🛑Assertion Fail: ${actual} !== ${expected}`;
      }
    }
    console.log(result);
  }
};

const without = function (arr1, arr2) {
  let result = [];
  let equalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== typeof arr2[i]) {
      if (arr1[i] === arr2[i]) {
        equalArray.push(arr1[i]);
      } else {
        result.push(arr1[i]);
      }
    }
  }
  console.log(result);
};

without([1, 2, 3], [1]);
without(['1', '2', '3'], [1, 2, '3']);
const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);

// TEST CODE
assertEqual(words, ['hello', 'world', 'lighthouse']);
