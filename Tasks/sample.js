// Get one random element from an array

// Step 2
// Remove unnecessary value assignment

'use strict';

const SAMPLE = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = SAMPLE;
