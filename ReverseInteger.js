var reverse = function(x) {
    l=Math.abs(x).toString().length;
    let sum=0;
    for(let i=l-1; i>=0;i--){
        sum+=Math.trunc(x/10**i)*(10**(l-i-1))
        x=x%10**i
    }
    if (sum < -(2**31) || sum > (2**31 - 1)) {
        return 0;
    }
    return sum;
};

console.log(reverse(120))
console.log(reverse(-321))