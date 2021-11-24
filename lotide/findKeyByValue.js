const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Fail: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (movie, genre) {
  for (const key in movie) {
    if (movie.hasOwnProperty(key)) {
      let value = movie[key];
      if (value === genre) {
        // console.log(value);
        // console.log(genre);
        // console.log(key);
        return key;
      }
      // else {
      //   return undefined;
      // }
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

// TEST
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
