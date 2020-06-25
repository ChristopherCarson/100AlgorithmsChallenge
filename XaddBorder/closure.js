const clExample = closureExample();

function closureExample() {
  let count = 0;

  return () => {
    count++;
    return count;
  };
}

console.log(clExample());
console.log(clExample());
console.log(clExample());
console.log(clExample());

var add = (function () {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

console.log(add());
