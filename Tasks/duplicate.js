// Return an array without duplicates

// Step 2
// Delete unnecessary if, else
// Delete unnecessary for loop
// Delete unnecessary identifiers
// Use fill() method

'use strict';

const duplicate = (value, N) => {
    if (N <= 0) return [];
    else return Array(N).fill(value);
};

module.exports = duplicate;
