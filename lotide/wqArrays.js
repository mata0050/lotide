// FUNCTION IMPLEMENTATION
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

module.exports = eqArrays;