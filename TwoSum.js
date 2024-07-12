/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// // bad solution, time complexity: O(n^2)
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

//good solution, time complexity: O(n)

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


// Test cases
const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [1, 2, 3, 4, 6], target: 6, expected: [1, 3] },
    { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] },
    { nums: [1000000, 2000000, 3000000, 4000000, 5000000], target: 7000000, expected: [2, 3] },
    { nums: [1, 2, 3], target: 7, expected: [0, 0] },
    { nums: [2], target: 4, expected: [0, 0] }
];

// Function to run all test cases
const runTests = () => {
    let passed = 0;
    testCases.forEach((test, index) => {
        const { nums, target, expected } = test;
        const result = twoSum(nums, target);
        const isPassed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test case ${index + 1}:`, result);
        console.log(`Expected: ${expected}`);
        console.log(`Pass: ${isPassed}`);
        console.log('----------------------');
        if (isPassed) {
            passed++;
        }
    });
    const total = testCases.length;
    const passRate = (passed / total) * 100;
    console.log(`Pass rate: ${passRate}% (${passed}/${total})`);
};

// Run all tests
runTests();