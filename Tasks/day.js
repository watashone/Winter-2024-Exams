// Get day number

// Step 2
// Delete unnecessary for loop
// Add const variable
// Use method findIndex()
// Use ternary operator

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const _parse_day_ = (s) => {
    const dayIndex = days.findIndex(day => s.startsWith(day.toLowerCase()));
    return dayIndex !== -1 ? dayIndex + 1 : -1;
};

module.exports = _parse_day_;
