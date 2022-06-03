// Currying is functional programming technique we can use to write code that is modular, easy  to test, and highly reusable.

// Functional programming is a declarative paradigm that emphasizes immutability and pure functions (meaning the function is side-effect free and for any given input) it will always return the same output.

// Non Curried Function

function add(a, b) {
	return a + b; 
}

// If add() was called with an argument for a but not for b, the function call would evaluate as 1 + undefined and return NaN.


// Let's curry the add() function, so we can handle the function call better if only one argument is available. 

// Traditional function

function add(a, b) {
    return a + b;
}

// Curried function
function curried_add(a) {
    //the outer function returns a nested single-argument function
    return function nested_func(b) {
        return a + b;
    }
}
/// function call:          Returns:
/// curried_add(1)          nested_func(b)
/// nested_func(b)          a + b

let add_on = curried_add(1); // returns nested_func()

add_one(10) //returns 11


// Code Challenge
function curriedMultiply(a) {
    return function(b) {
        return a * b;
    }
}

let nestedFunction = curriedMultiply(5);
let result = nestedFunction(5);

console.log(result);

// makeGreeting Code Challenge
function makeGreeting(string) {
    //Write your code here
  return function(secondString) {
    return `${string}${secondString}`;
  }
 
}
let hello = makeGreeting('Hello');
let helloWorld = hello('World');
console.log(helloWorld);

/// Currying with Arrow Function
let curried_add = a => b => a + b;

/// let curried_all is a variable assignment to outer arrow function, a => ...
/// curried_all takes an argument a and returns b => a + b
/// Invoking the 

