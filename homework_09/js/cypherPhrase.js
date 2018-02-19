cypherPhrase = function(obj,str) {
    var arr = str.split("");
    let newArr = getTransformedArray (arr,function(i){
        let j = obj.hasOwnProperty(i)? obj[i] : i;
        return j;
    });
    return newArr.join("");
}