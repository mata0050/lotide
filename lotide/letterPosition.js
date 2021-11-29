

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


module.exports = letterPositions;