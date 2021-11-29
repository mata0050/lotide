// FUNCTION IMPLEMENTATION

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

module.exports = without;
