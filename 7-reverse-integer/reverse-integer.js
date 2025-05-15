/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    if (num < -2147483648 || num > 2147483647) {
        return 0;
    }
   return num
};