// In Javascript, you can declare functions within other functions and return them. The inner function has access to any variables declared above it.
// The inner function add has access to 'a'. This allows the outer function to serve as a factory of new functions, each with different behavior.


  function createAdder(x) {
    return function add(y) {
      return x+y;
    }
  }

  const addition = createAdder(3);
  const result = addition(10);

  const resultByAnotherWay = createAdder(3)(10);

  console.log(result);
  console.log(resultByAnotherWay);


  // Counter Example Leetcode

  var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */