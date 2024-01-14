// Find longest string

// Step 2
// Delete unnecessary blocks, if, variables
// Change value variable
// Add ternary operator

'use strict';

const longest = function (line = [], maxRandom = Math.random) {
    let x = 0;
    let s = '';
    for (let i of line) {
        if (i.length > x) {
            x = i.length;
            s = i;
        }
    }
    return s.length > 0 ? s : 'Not found';
};

module.exports = longest;
