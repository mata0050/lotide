// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  const result = actual === expected;

  if (result === true) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Fail: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
