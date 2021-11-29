// FUNCTION IMPLEMENTATION
const tail = function (arr) {
  if (arr.length >= 3) {
    const lastItem = arr.length + 1;
    const threeLastItem = lastItem - 3;
    return arr.splice(threeLastItem, lastItem);
  }
};

module.exports = tail;
