// FUNCTION IMPLEMENTATION
const tail = function (arr) {
  if (arr.length >= 3) {
    const lastItem = arr.length + 1;
    const threeLastItem = lastItem - 3;
    return arr.splice(threeLastItem, lastItem);
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Assertion Fail`);
  }
};

// TEST CODE
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']);

tail([5, 3, 2]);
