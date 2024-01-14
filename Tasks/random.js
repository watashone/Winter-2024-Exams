  // Generate random integer value in given range

  // Step 2
  // Remove unnecessary return

  'use strict';

  const Random = (min, max) => {
    if (max === undefined) {
      max = min;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  module.exports = Random;
