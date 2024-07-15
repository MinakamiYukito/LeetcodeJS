/**
 * @param {string} s
 * @return {number}
 */
// Bad solution: worst case time complexity: O(n^2)
// var lengthOfLongestSubstring = function(s) {
//     let current=0;
//     let longest=0;
//     const strs=[];

//     for (let i=0; i<s.length ; i++){
//         while (strs.includes(s[i])){
//             strs.shift()
//         }

//         strs.push(s[i])
//         if(strs.length>longest) longest=strs.length
//     }
//     return longest
// };

//good solution time complexity : O(n)
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let left = 0;
    const charIndexMap={};

    for (let right=0; right < s.length; right++){
        current=s[right]
        if(charIndexMap[current] != undefined&&charIndexMap[current]>=left){
            left = charIndexMap[current]+1
        }
        charIndexMap[current] = right;
        longest=Math.max(longest,right-left+1)
    }
    return longest
}
// Test cases
const testCases = [
    { input: "abcabcbb", expected: 3 }, // "abc"
    { input: "bbbbb", expected: 1 }, // "b"
    { input: "pwwkew", expected: 3 }, // "wke"
    { input: "", expected: 0 }, // ""
    { input: "au", expected: 2 }, // "au"
    { input: "dvdf", expected: 3 }, // "vdf"
    { input: "anviaj", expected: 5 }, // "nviaj"
    { input: "abcdefg", expected: 7 }, // "abcdefg"
    { input: "aab", expected: 2 }, // "ab"
    { input: "tmmzuxt", expected: 5 }, // "mzuxt"
];

// Pass rate
let passed = 0;

testCases.forEach((testCase, index) => {
    const result = lengthOfLongestSubstring(testCase.input);
    if (result === testCase.expected) {
        passed++;
        console.log(`Test case ${index + 1} passed`);
    } else {
        console.log(`Test case ${index + 1} failed: input(${testCase.input}) => output(${result}), expected(${testCase.expected})`);
    }
});

const passRate = (passed / testCases.length) * 100;
console.log(`Pass rate: ${passRate}%`);
