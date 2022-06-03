/// Hoisting In Javascript
// During compilation phase of code execution, the javascript engine allocates memory
// to save the names of declared variables and function by hoisting varianble and function
// declaratio  to the top of their current scope.

// Hoisting does not actually move your code arounnd, instead it:

// Finds all the variable and function declarations in the code 
// Raises the variable names and function declarations to the top of their cope before code execution
// Immediately initializes function declarations
// Postpones handling initialization, or asignment of values, until the code is executed


console.log(add(1, 2));

function add(a, b) {
    return a + b
}

