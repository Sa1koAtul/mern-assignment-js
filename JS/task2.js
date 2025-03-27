function sortStringAlphabetically(inputString) {
    // Convert the string into an array of characters
    const charArray = inputString.split('');
    
    // Sort the array of characters
    charArray.sort();
    
    // Join the sorted array back into a string
    return charArray.join('');
}

// Example usage:
const input = 'webmaster';
const output = sortStringAlphabetically(input);
console.log(output); // Output: 'abeemrstw'