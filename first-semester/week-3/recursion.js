/*=============================================
    Returns even or odd number recursively
==============================================*/

function isEven(n) {
    if (n < 0)
        return "Enter a positive number.";
    else if (n === 0)
        return true;
    else if (n === 1)
        return false;
    return isEven(n - 2);
}
console.log(isEven(-1));

/*=======================================================
    Using tenary operator to rewrite the above function
========================================================*/
function isEven(n) {
    return n < 0 ? "Please enter a positive number." :
    n === 0 ? true :
    n === 1 ? false : 
    isEven(n - 2);
}
console.log(isEven(50));
  