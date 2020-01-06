// Modules and Require()
var stuff = require("./stuff");

var nums = [0, 1, 2, 3];
var piVal = stuff.pi;

// stuff. is part of module patterns
console.log(stuff.counter(nums));
console.log(stuff.plus(3, 7));
console.log(stuff.plus(piVal, 98));

// console.log("Hello World");

// Using global methods
// setTimeout(function() {
//   console.log("3 seconds have passed");
// }, 3000);

// var time = 0;

// var timer = setInterval(function() {
//   time += 2;
//   console.log(`${time} seconds have passed`);

//   // Clear the loop
//   if (time > 9) {
//     clearInterval(timer);
//   }
// }, 2000);

// Node can tell us where we are in the directory and shii. Using the global objects
// console.log(`We are in: ${__dirname} directory`);
// console.log(`We are using the: ${__filename} file`);
