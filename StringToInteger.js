/**
 * @param {string} s
 * @return {number}
 */
//my solution
var myAtoi = function(s) {
    let num="";
    let pos=true;
        let i=0;
        //Ignore any leading whitespace
        while(true){
            if(s[i]==" "){
                i++;}
            else{break}}
        
        while(true){
            if(s[i]=="-"){
                pos=false;
                i++;
                break;
            }
            else if(s[i]=="+"){
                i++;
                break;
            }
            else{break}
        }
        while(i<s.length){
            if(isNaN(s[i])||s[i]==" "){
                return Deal(Number(num),pos)
            }
            else{
                num += s[i];
                i++;
                }
        }
        return Deal(Number(num),pos)
        
            
};

var Deal = function(num,pos) {
    if(!pos){
        result=num*-1
        if (result<-2147483648){
            return -2147483648
        }
        return result
    } 
    else{
        if(num>2147483647){
            return 2147483647
        }
        return num
    }
    
};

//gpt solution

var Atoi = function(s) {
    let num = "";
    let pos = true;
    let i = 0;

    // Ignore any leading whitespace
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // Check for sign
    if (i < s.length && (s[i] === "-" || s[i] === "+")) {
        pos = s[i] !== "-";
        i++;
    }

    // Convert digits to number
    while (i < s.length && !isNaN(s[i]) && s[i] !== " ") {
        if (s[i] >= "0" && s[i] <= "9") {
            num += s[i];
        } else {
            break;
        }
        i++;
    }

    // If num is empty, return 0
    if (num === "") {
        return 0;
    }

    // Convert string to number and apply sign
    let result = Number(num);
    if (!pos) {
        result = -result;
    }

    // Handle overflow
    if (result < -2147483648) {
        return -2147483648;
    }
    if (result > 2147483647) {
        return 2147483647;
    }

    return result;
};


console.log(myAtoi("   +0 123"));
console.log(myAtoi("1337c0d3"));

console.log(Atoi("   +0 123"));
console.log(Atoi("1337c0d3"));