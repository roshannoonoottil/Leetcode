/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let out = new Set(nums)
    if(out.size == nums.length){
        return false
    }else{
        return true
    }

};