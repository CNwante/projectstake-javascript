// Custom for loop implementation
const loop = (value, test, update, body) => {
    while(test(value)) {
        body(value);
        value = update(value);
    }
}

// Variable declaration and functions definition
let initializer = 1;                  // Initial value
const condition = (value) => value <= 15;   // Test function
const update = (value) => value + 1;   // Update function 
const body = (value) => console.log(value); // Body function

// Invoking the loop function
loop(initializer, condition, update, body);