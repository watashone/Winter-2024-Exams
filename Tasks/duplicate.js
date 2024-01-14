// Return an array without duplicates

// Step 1
// Fix formatting
// Add const
// Add 'use strict';

'use strict';

const duplicate = (value, N) => {
    if (N <= 0) return [];
    else {
        const res = [];
        for (let i = 0; i < N; i++) {
            res[i] = value;
        }
        return res;
    }
};

module.exports = duplicate;
