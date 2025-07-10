/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let j = 0,k = 0
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < prices[j]){
            j = i
        }else {
            let profit = prices[i] - prices[j]; 
            if(profit > k){
                k = profit; 
            }
        }
        
    }
    return k
};