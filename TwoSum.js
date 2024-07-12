/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// // bad solution
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if (nums[i]+nums[j]==target){
//                 return [i,j]
//             }
//         }
//     }
//     return [0,0]
// };

//good solution, time complexity: O(n^2)

var twoSum = function(nums, target) {
    const preValue={}
    for(let i=0; i<nums.length;i++){
        const needed=target-nums[i]
        if(preValue[needed]!=undefined){
            return [preValue[needed],i]
        }
        else{
            preValue[nums[i]]=i
        }
    }
    return [0,0]
};