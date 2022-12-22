// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why
 nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation (Min 50 words): 

/* the nestedFunction is defined inside the myFunction function,
 which means it is a local function within myFunction. This means
  that the nestedFunction has access to all of the variables and
   parameters defined within myFunction, including the internal
    variable.

The external variable, on the other hand, is defined outside of 
both myFunction and nestedFunction, so it is not accessible from
 within either of those functions. However, myFunction is able to
  access the external variable because it is defined in the global 
  scope, which is accessible to all functions.

When myFunction is called, it first logs the value of external to 
the console, and then it calls the nestedFunction, which logs the 
value of internal to the console. Because nestedFunction is defined 
within myFunction, it has access to the internal variable and is
 able to log its value to the console. */

