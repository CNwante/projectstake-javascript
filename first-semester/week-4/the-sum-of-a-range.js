// Range function
/*
* Takes two arguments, start and end
* Returns an array containing all the numbers
* from start up to (and including) end.
*/

function range(start, end, step) {
    let arrayRange = [];
    if (typeof(step) === "undefined" || isNaN(step)) {
        step = 1;
    }
    else if (step < 0) {
        step = -step;
    }

    if (start > end) {
        for (let i = start; i >= end; i -= step) {
            arrayRange.push(i);
        }
    }
    else {
        for (let i = start; i <= end; i += step) {
            arrayRange.push(i);
        }
    }
    return arrayRange;
}
const result = range(15, 2, -2);
console.log(result);

// Range function
/*
* Takes an array and return the sum of the array.
*/

function sum(array) {
    if (!(array instanceof Array)) {
        return "Input type must be an array!";
    }

    let accumulator = 0;
    for (let i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    return accumulator;
}
console.log(sum(result));