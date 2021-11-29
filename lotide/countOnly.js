

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

const countLetters = function (name) {
  let result = {};

  for (let i = 0; i < name.length; i++) {
    let letter = name[i];
    let expression = `${letter}`;
    let find = new RegExp(expression, 'g');
    const match = name.match(find);
    if (match) {
      result = { ...result, [letter]: match.length };
    } else {
      result = { ...result, [letter]: 1 };
    }
  }
  return result;
};

console.log(countLetters('LHL'));

module.exports = countOnly;
