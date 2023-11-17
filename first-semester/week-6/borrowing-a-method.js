// Exercise 4: Borrowing a method Implementation

let map = {one: true, two: true, hasOwnProperty: true};

// Wrong calling
// console.log(map.hasOwnProperty("one"));

// Correct calling
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true