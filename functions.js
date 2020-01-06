// Normal function statement
function hello() {
  console.log("Hello world");
}

// hello();

//call function
function callfunction(fun) {
  fun();
}

// function expression
var goodbye = function() {
  console.log("Goodbye Cruel World");
};

callfunction(hello);
