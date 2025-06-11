/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let res = true;
    function trav(p,q){
        if(!p && !q) return true

        if(p?.val !== q?.val){
             res = false
             return 
        }

        trav(p.left, q.left)
        trav(p.right, q.right)
    }
    trav(p, q)
    return res
    
};