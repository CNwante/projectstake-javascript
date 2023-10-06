/*===============================================================
Counts any occurrence of uppercase "B" characters in a string.
=================================================================*/
function countBs(str) {
    let totalBs = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            totalBs++;
        }
    }
    return totalBs;
}
const result = countBs("Counting B's characters in a string");
console.log("Number of B's in the string is: ", result);


/*====================================================================
Counts the occurrence of any character in a string, passed in the arg.
======================================================================*/
function countChar(str, char) {
    let totalChar = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            totalChar++;
        }
    }
    console.log(`Number of ${char}'s in the string is: `, totalChar);
}
countChar("Counting characters in a string", "a");
