// Get month number

// Step 2
// Change identifiers name
// Use toLowerCase() only once

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
    const mLength = Months.length;
    const lowerCaseS = s.toLowerCase();
    for (let i = 0; i < mLength; i++) {
        if (lowerCaseS.startsWith(Months[i])) return i + 1;
    }
    return -1;
};

module.exports = Month;
