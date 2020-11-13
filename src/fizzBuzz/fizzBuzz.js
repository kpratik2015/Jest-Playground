/**
 * After having all tests done, we can safely refactor the code.
 */

function fizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  else if (num % 3 === 0) return "Fizz";
  else if (num % 5 === 0) return "Buzz";
  return num;
}

// function fizzBuzzV2(num) {
//   let string = "";
//   if (num % 3 === 0) string += "Fizz";
//   if (num % 5 === 0) string += "Buzz";
//   return string.length ? string : num;
// }

exports.fizzBuzz = fizzBuzz;
