// Get day number

// Step 1
// Add 'use strict';
// Add const and let
// Delete unnecessary identifiers
// Change identifiers names

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const _parse_day_ = (s) => {
  for (let i = 0; i < days.length; i++) {
    if (s.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;
