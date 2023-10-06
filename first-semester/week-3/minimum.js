//  Takes two arguments and returns their minimum

function min(a, b) {
    alert(`
    You will see prompt that take two numbers 
    and logs the smaller one to the console.
    Press OK to continue.`);

    a = prompt(`Enter first number: `);
    b = prompt("Enter second number: ");
    
    return a < b ? a : b;
}
console.log(min(6, 5));