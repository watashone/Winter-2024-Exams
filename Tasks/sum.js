// Sum all numbers from an array

// Step 1
// Add 'use strict';
// Remove unnecessary identifiers, If Statements
// Add let variables
// Fix formatting

'use strict';

const sum = function (arr = () => {
}) {
    let total = 0;
    for (let i of arr) {
        if (typeof i === 'number') {
            total += i;
        }
    }
    return total;
};

module.exports = sum;
