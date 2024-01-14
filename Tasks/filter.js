// Filter array by type name

// Step 1
// Add 'use strict';
// Change identifiers name
// Add const and let

'use strict';

const Filter = (arr, type) => {
  const remove = [];
  for (let C of arr) {
    let x = arr.indexOf(C);
    if (typeof arr[x] !== type) {
      remove.unshift(x);
    }
  }
  for (let x of remove) arr.splice(x, 1);
  return arr;
};

module.exports = Filter;
