// TEST CASE VARIABLES
const userInputA = { a: 1, b: 2 };
const userInputB = { a: 1, b: 2 };

if (userInputA === null || userInputB === null) {
    console.log("Input cannot be null");
} else {
    const result = deepEqual(userInputA, userInputB);
    console.log(result);
}

// DEEP COMPARISON FUNCTION

function deepEqual(value1, value2) {
    if (arguments.length !== 2) {
        return "The program requires two inputs.";
    }

    if (value1 === null || value2 === null) {
        return "Input cannot be null";
    }

    if (typeof value1 !== "object" || typeof value2 !== "object") {
        return value1 === value2;
    }

    const keysA = Object.keys(value1);
    const keysB = Object.keys(value2);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }

    return true;
}