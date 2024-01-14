// Find an intersection of two dictionaries

// Step 1
// Add 'use strict';
// Add const and let
// Delete empty blocks
// Fix formatting

'use strict';

const intersection = function intersection(object_1, object_2) {
    const first_keys = Object.keys(object_1);
    for (let attribute_name of first_keys) {
        if (object_1[attribute_name] === object_2[attribute_name]) {
            object_2[attribute_name] = object_1[attribute_name];
        } else {
            delete object_1[attribute_name];
        }
    }
    return object_1;
};

module.exports = intersection;
