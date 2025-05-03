/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let val = x.toString()
    let val1 = val.split('').reverse().join('')
    if(val === val1){
        return true
    }else{
        return false
    }
    
};