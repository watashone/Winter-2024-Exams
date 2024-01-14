// Get one random element from an array

// Step 1
// Add 'use strict';

'use strict';

const SAMPLE = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = SAMPLE;
