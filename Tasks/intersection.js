// Find an intersection of two dictionaries

// Step 2
// Change identifiers name
// Delete unnecessary else statement
// Use hasOwnProperty() method

'use strict';

const intersection = function intersection(firstObj, secondObj) {
    const intersectionObj = {};
    for (let key in firstObj) {
        if (firstObj.hasOwnProperty(key) && secondObj.hasOwnProperty(key)) {
            if (firstObj[key] === secondObj[key]){
                intersectionObj[key] = firstObj[key];
            }
        }
    }
    return intersectionObj;
};

module.exports = intersection;
