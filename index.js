const receivesAFunction = (callback) => {
    callback();
  };

function returnsANamedFunction() {
    function innerFunction() {
    }
    return innerFunction;
}

 module.exports = returnsANamedFunction;

function returnsAnAnonymousFunction() {
  return function() {
    // Function body
};

}