function isFive(num) {
  if (num === 5) return true;
  return false;
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw new TypeError("Give me a number!")
  } return number % 2 !== 0
}

function myRange(min, max, step = 1) {
  // Your code here
}


module.exports = { isFive, isOdd, myRange };
