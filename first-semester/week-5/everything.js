// Everything implementation using loop
const numbers = [2, 4, 6, 7];
const evenNumber = (number) => number % 2 === 0;

function everything(array, predFunction) {

    for (let element of array) {
        if (!predFunction(element)){
           return false;
        }
    }
    return true;
}
console.log("Everything: ", everything(numbers, evenNumber));

// Everything implementation using array some() method
function customEvery(array, predFunction) {
    const hasNonMatch = array.some((element) => !predFunction(element));

    return !hasNonMatch;
}

if (customEvery(numbers, evenNumber)) {
    console.log("Custom Every: ", true);
}
else {
    console.log("Custom Every: ", false);
}