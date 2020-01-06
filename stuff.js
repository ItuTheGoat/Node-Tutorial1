// function callfunction(fun) {
//   console.log(fun());
// }

var counter = function(arr) {
  return `There are ${arr.length} elements in this array`;
};

var plus = function(a, b) {
  return `The sum of the ${a} and ${b} is ${a + b}`;
};
var pi = 3.14159265;

// Have to explicitly export something in order to require it, (in this example, the functions)
// module.exports.counter = counter;
// module.exports.plus = plus;
// module.exports.pi = pi;

// |||||OR|||||

module.exports = {
  counter: counter,
  plus: plus,
  pi: pi
};

// |||||OR|||||

// module.exports.counter = function(arr) {
//   return `There are ${arr.length} elements in this array`;
// };

// module.exports.plus = function(a, b) {
//   return `The sum of the ${a} and ${b} is ${a + b}`;
// };

// module.exports.pi = 3.14159265;
