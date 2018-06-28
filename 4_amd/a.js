define('a', ['b'], function(b) {

  const obj = {
    a: 1,
    b: 2,
  };

  return function() {
    b.printObject(obj);
  }
});
