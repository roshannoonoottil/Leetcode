/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let ch of s) {
        if (pairs[ch]) {
            if (stack.pop() !== pairs[ch]) return false;
        } else {
            stack.push(ch);
        }
    }

    return stack.length === 0;
};
