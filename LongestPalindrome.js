/**
 * @param {string} s
 * @return {string}
 */

//bad solution
// var longestPalindrome = function(s) {
//     if (s.length === 0) return "";
//     let longest = "";

//     const expand = (left, right) => {
//         while (left >= 0 && right < s.length && s[left]===s[right]){
//             left--;
//             right++;
//         }
//         return s.substring(left+1,right);
//     }

//     for(let i=0; i<s.length ; i++){
//         //Odd
//         let palin1=expand(i,i);
//         if(palin1.length>longest.length){
//             longest=palin1;
//         }
//         //Even
//         let palin2=expand(i,i+1);
//         if(palin2.length>longest.length){
//             longest=palin2;
//     }}
//     return longest;
// }

//good solution

var longestPalindrome = function(s) {
    if (s.length === 0) return "";

    // Step 1: Preprocess string
    let t = '#';
    for (let i = 0; i < s.length; i++) {
        t += s[i] + '#';
    }
    const p = new Array(t.length).fill(0)
    let center=0, right=0;
    for(let i=0; i<t.length ; i++){
        if(i < right){
            p[i]=Math.min(right-i, p[2*center -i]);
        }
        while(i+p[i]+1<t.length&&i-p[i]-1>=0 && t[i+p[i]+1]===t[i - p[i] - 1]){
            p[i]++;
        }

        if(i+p[i]>right){
            center=i;
            right=i+p[i];
        }
    }

    let maxLen=0, centerIndex =0 ;
    for (let i=0; i<p.length; i++){
        if(p[i]>maxLen){
            maxLen=p[i];
            centerIndex = i;
        }
    }

    const start=Math.floor((centerIndex - maxLen)/2);
    return s.substring(start,start+maxLen);
}





// Test
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));