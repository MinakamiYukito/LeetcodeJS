/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//     //bad solution
//     if (numRows === 1) return s;
//     let down = true;
//     const array={};
//     let j=0, i=0;
//     for (let x=0; x<s.length ; x++){
//         if(down&&j<numRows-1){
//             array[[i,j]]=s[x];
//             j++;
//             if(j>=numRows-1){
//                 down=false;
//         }
//         }
//         else if(!down&&j>0){
//             array[[i,j]]=s[x];
//             j--;
//             i++;
//             if(j<=0){
//                 down=true
//             }
//         }
//     }
//     let result="";
//     for(let y=0; y<numRows ; y++){
//         for(let x=0; x<=i; x++){
//             if(array[[x,y]]!==undefined){
//                 result+=array[[x,y]]
//             }
//         }
//     }
//     return result;
// };


//gpt solution
var convert = function(s, numRows) {
    if (numRows === 1) return s;

    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");

    let curRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

//     return rows.join("");
// };


convert("PAYPALISHIRING",4)