'use strict';

// Ex. 1
var string1 = 'Hello';
var string2 = 'World';

console.log(string1 + ' ' + string2);

// Ex. 2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(2, 3));
console.log(multiply(5));

// Ex. 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (total, amount) {
    return total + amount;
  }) / args.length;
};

console.log(average(2, 2, 2));

// Ex. 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// Ex. 5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];


console.log(firstname + ' ' + lastname);
