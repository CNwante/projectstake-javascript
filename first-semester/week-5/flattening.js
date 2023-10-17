// Implementation of the "Flattening" exercise using array reduce and concat methods.
const multiArray = [1, [2, [3, 4]], 6, 7, [6, [6, [8, 0]]], [5, 6]];

console.log(flatArrays(multiArray));

function flatArrays(arrayOfArrays) {
    if (!Array.isArray(arrayOfArrays))
        console.error("Passing a type that is not an array is not allowed!");

    return arrayOfArrays.reduce((accumulator, currentElement) => {
        if (currentElement instanceof Array)
            return accumulator.concat(flatArrays(currentElement));

        accumulator.push(currentElement);
        return accumulator;
    }, []);
}