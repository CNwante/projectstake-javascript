/*
Reverse Array Function:
•	This function takes an array as an argument.
•	It creates a new array.
•	It iterates through the elements of the input array in reverse order.
•	For each element, it adds it to the new array.
•	Finally, it returns the new array with elements in the reversed order.
*/

function reverseArray(array) {
    if (!(array instanceof Array)) {
        return "Input type must be an array!";
    }

    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
const result = reverseArray([1, 2, 3, 4, 5]);
console.log(result);

// Reverse Array In Place
function reverseArrayInPlace(array) {
    if (!(array instanceof Array)) {
        return "Input type must be an array!";
    }

    let start = 0;
    let end = array.length - 1;

    while(start < end) {
        let temp = array[start];

        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }
    return array;
}
const result1 = reverseArrayInPlace([1, 2, 3, 4, 5]);
console.log(result1);