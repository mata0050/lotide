// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  // let result = [];
  // let finalCheck;

  // for (const key in actual) {
  //   if (actual[key] === expected[key]) {
  //     result.push(true);
  //   } else {
  //     result.push(false);
  //   }
  // }

  // result.forEach((element) => {
  //   if (element !== false) {
  //     finalCheck = true;
  //   }
  // });

  if (actual === expected[0]) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Fail: ${actual} !== ${expected}`);
  }
};

const letterPositions = function (name) {
  let result = {};

  for (let i = 0; i < name.length; i++) {
    let letter = name[i];
    result = { ...result, [letter]: i };
  }

  for (const key in result) {
    return { ...result, [key]: name.indexOf(key) };
  }
  console.log(result);
};

// TEST CODE
assertEqual(letterPositions('hello').e, [1]);
