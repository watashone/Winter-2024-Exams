// Get month number

// Step 3
// Remove unnecessary variable
// Remove unnecessary for loop
// Add const variable
// Use findIndex() instead
// Use ternary operator

'use strict';

const Months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
];

const Month = (s) => {
    const lowerCaseS = s.toLowerCase();
    const index = Months.findIndex(month => lowerCaseS.startsWith(month));
    return index !== -1 ? index + 1 : index;
};

module.exports = Month;
