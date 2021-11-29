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

module.exports = middle;
