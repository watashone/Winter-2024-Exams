// Sum all number values in dict

// Step 1
// Add 'use strict';
// Add const and let
// Remove empty blocks

'use strict';

const count = (obj) => {
    let sum = 0;
    const keys = Object.keys(obj);
    keys.forEach((key) => {
        const value = obj[key];
        if (typeof value === 'number') sum += value;
    });
    return sum;
};

module.exports = count;
