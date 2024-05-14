"use strict";
exports.__esModule = true;
function findRepeatedSequences(str, k) {
    var left = 0;
    var right = 0;
    var container = {};
    var result = [];
    while (right <= str.length) {
        if (right - left !== k) {
            right++;
        }
        else {
            var substring = str.slice(left, right);
            if (substring in container) {
                container[substring] = container[substring] + 1;
            }
            else {
                container[substring] = 1;
            }
            left++;
        }
    }
    for (var key in container) {
        if (container[key] > 1) {
            result.push(key);
        }
    }
    return result;
}
exports["default"] = findRepeatedSequences;
