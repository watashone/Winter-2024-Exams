// Filter array by type name

// Step 2
// Delete unnecessary variables
// Delete unnecessary for loops, if statements
// Use filter() method

'use strict';

const Filter = (arr, type) => {
  return arr.filter(element => typeof element === type);
};

module.exports = Filter;
