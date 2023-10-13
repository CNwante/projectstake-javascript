
let testArray = [1, 2, 3];
// Array To List function
function arrayToList(array) {
    if (!(array instanceof Array)) {
        return "Input type must be an array!";
    }

    let list = null;

    for (i = array.length - 1; i >= 0; i--) {
        let element = array[i];

        let obj = {
            value: element,
            rest: list
        };
        list = obj;
    }
    return list;
}
let result1 = arrayToList(testArray);
console.log("arrayToList: ", result1);

// list To Array function
function listToArray(list) {
    let array = [];

    while (list !== null) {
        let element = list["value"];
        array.push(element);

        list = list["rest"];
    }
    return array;
}
let result2 = listToArray(result1);
console.log("listToArray: ", result2);

// Prepend function
function prepend(element, list) {
    return {
        value: element,
        rest: list
    };
}
let result3 = prepend(4, result1);
console.log("prepend: ", result3);

// nth function
function nth(list, index) {

    let i = 0;
    while(list !== null) {
        if(i === index) {
            return list.value;
        }
        list = list.rest;
        i++;
    }
}
let result4 = nth(result3, 0);
console.log("nth: ", result4);

// Recursive nth function
function recursiveNth(list, index) {
    if (index === 0) {
        return list.value;
    }
    return recursiveNth(list.rest, index - 1);
}
let result5 = nth(result3, 0);
console.log("recursiveNth: ", result4);