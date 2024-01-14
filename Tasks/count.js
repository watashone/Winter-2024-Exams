// Sum all number values in dict

// Step 2
// Remove forEach loop
// Add for..of loop
// Delete unnecessary identifiers

'use strict';

const count = (obj) => {
    let sum = 0;
    for (let key in obj) {
        const value = obj[key];
        if (typeof value === 'number') sum += value;
    }
    return sum;
};

module.exports = count;
