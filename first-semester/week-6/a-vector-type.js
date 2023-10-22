// Exercise 1: A Vector Type Implementation

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
 //Give the Vec prototype two methods, plus and minus
  plus(vector) {
    return {
      x: this.x + vector.x,
      y: this.y + vector.y
    };
  }
  
  minus(vector) {
    return {
      x: this.x - vector.x,
      y: this.y - vector.y
    };
  }
  
  //Add a getter property to compute the length of the vector
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5