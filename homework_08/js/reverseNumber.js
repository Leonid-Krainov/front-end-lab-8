let reverseNumber = (a) => {
    var b = (a<0) ? "-" :"";      
    var str = Math.abs(a).toString(); 
    for (var i = str.length - 1; i >= 0; i--) {
        b += str[i];
    }
    return Number(b);
}