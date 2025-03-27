function reverseNumber(x) {
    // Convert the number to a string and then split it into an array of digits
    let reversed = x.toString().split('').reverse().join('');
    
    // Convert the reversed string back to a number
    return parseInt(reversed, 10);
}

// Sample Data
let x = 32243;
let output = reverseNumber(x);
console.log(output);  // Expected Output: 34223